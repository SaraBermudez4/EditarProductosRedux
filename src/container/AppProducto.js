import React from 'react'
import Producto from '../components/Producto'
import  ListarProducto  from '../components/ListarProducto'

const AppProductos = () => {
    return (
        <div className="container text-center">
        <div className="row mt-3">
          <div className="col-md-6">
            <Producto />
          </div>
          <div className="col-md-6">
            <ListarProducto />
          </div>
        </div>
      </div>
    )
}

export default AppProductos;