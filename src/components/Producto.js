import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddProducto, EditarProducto } from '../actions/productosAction';
import { useForm } from '../hooks/useForm';

const initialState = {
    nombre: '',
    cantidad: '',
    precio: '',
    tipo: '',
    fechaVencimiento: ''
}

const Producto = ({ editar, producto = initialState }) => {

    const dispatch = useDispatch()

    const [formValue, handleInputChange, reset, setValues] = useForm({
        nombre: producto.nombre,
        cantidad: producto.cantidad,
        precio: producto.precio,
        tipo: producto.tipo,
        fechaVencimiento: producto.fechaVencimiento
    })

    const { nombre, cantidad, precio, tipo, fechaVencimiento } = formValue

    useEffect(() => {
        setValues(producto)
    }, [producto]);

    const handleSubmit = e => {
        e.preventDefault()

        if (editar) {
            dispatch(EditarProducto({
                nombre,
                cantidad,
                precio,
                tipo,
                fechaVencimiento,
                id: producto.id
            }))
        } else {
            dispatch(AddProducto({
                nombre,
                cantidad,
                precio,
                tipo,
                fechaVencimiento,
                id: generarID()
            }))
        }
        reset()
    }

    const generarID = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    };

    return (
        <div>
            <div className="card mt-5">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <h1> Agregar Producto</h1>
                        <hr />
                        <div className="orm-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Producto</label>
                            <div className="mb-4 mb-lg-0">
                                <input
                                    type="text"
                                    name="nombre"
                                    className="form-control"
                                    placeholder="nombre"
                                    autoComplete="off"
                                    value={nombre}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Cantidad Producto</label>
                            <div className="mb-4 mb-lg-0">
                                <input
                                    type="text"
                                    name="cantidad"
                                    className="form-control"
                                    placeholder="cantidad"
                                    autoComplete="off"
                                    value={cantidad}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Precio Producto</label>
                            <div className="mb-4 mb-lg-0">
                                <input
                                    type="text"
                                    name="precio"
                                    className="form-control"
                                    placeholder="precio"
                                    autoComplete="off"
                                    value={precio}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Tipo Producto</label>
                            <div className="mb-4 mb-lg-0">
                                <input
                                    type="text"
                                    name="tipo"
                                    className="form-control"
                                    placeholder="tipo"
                                    autoComplete="off"
                                    value={tipo}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha Vencimiento Producto</label>
                            <div className="mb-4 mb-lg-0">
                                <input
                                    type="text"
                                    name="fechaVencimiento"
                                    className="form-control"
                                    placeholder="fechaVencimiento"
                                    autoComplete="off"
                                    value={fechaVencimiento}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Producto;
