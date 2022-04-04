import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Producto from './Producto';

const ListarProducto = () => {

    const { productos } = useSelector(store => store.productosPrincipal)

    const [productoEditar, setProductoEditar] = useState({
        nombre: '',
        cantidad: '',
        precio: '',
        tipo: '',
        fechaVencimiento: ''
    });

    return (
        <>
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">Productos Almacenados</h2>
                    <div className="lista-producto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre Producto</th>
                                    <th scope="col">Precio Producto</th>
                                    <th scope="col">Cantidad Producto</th>
                                    <th scope="col">Tipo Producto</th>
                                    <th scope="col">Fecha Vencimiento Producto</th>
                                    <th scope="col">Editar Producto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productos.map((producto, index) => (
                                        <tr key={index}>
                                            <td>{producto.nombre}</td>
                                            <td>{producto.precio}</td>
                                            <td>{producto.cantidad}</td>
                                            <td>{producto.tipo}</td>
                                            <td>{producto.fechaVencimiento}</td>
                                            <td><button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary"
                                                onClick={() => setProductoEditar(producto)}
                                            >Editar</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div >
            </div >

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editar producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Producto editar={true} producto={productoEditar} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarProducto;
