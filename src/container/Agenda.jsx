import React from 'react'
import { Provider } from 'react-redux'
import AgregarCitas from '../components/AgregarCita'
import ListarCitas from '../components/ListarCitas'
import {Store} from '../store/Store'



const Agenda = () => {
    return (
        <Provider store={Store}>
        <div className="container text-center">
        <header><h1>EPS Sura</h1></header>
        <div className="row mt-3">
          <div className="col-md-6">
           <AgregarCitas/>
          </div>
          <div className="col-md-6">
           <ListarCitas/>
          </div>
        </div>
      </div>
      </Provider>
    )
}

export default Agenda
