import { types } from "../types/types"

export const AddProducto = (producto) => {
    return {
        type: types.agregar,
        payload: producto
    }
}

export const EditarProducto = (productoEditado) => {
    return {
        type: types.editar,
        payload: productoEditado
    }
}