import { types } from "../types/types";

const initialState = {
    productos: [
        {
            nombre: "Manzana",
            cantidad: "10",
            precio: "10000",
            tipo: "Fruta",
            fechaVencimiento: "12/12/2022",
            id: "i6lx2j3f0fl1lafz15",
        },
        {
            nombre: "Pera",
            cantidad: "12",
            precio: "1000",
            tipo: "Fruta",
            fechaVencimiento: "22/12/2022",
            id: "i6lx2j3f0fl1lafz16",
        },
    ]
}

export const productosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.agregar:
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }
        case types.editar:
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }
        default:
            return state
    }
}