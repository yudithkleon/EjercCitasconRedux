import React from 'react'
import { useForm } from '../hook/useFrom'
import { useDispatch } from 'react-redux'
import {AgregarCita} from '../action/ActionCitas'
import uuid from 'react-uuid'


const AgregarCitas = () => {

    const [formValue, handleInputChange, reset] = useForm({
        nombre:'',
        fecha:'',
        hora:'',
        sintomas:''
    })
    const {nombre, fecha, hora, sintomas}= formValue

const dispatch = useDispatch()

const nuevaCita = (citas)=> dispatch(AgregarCita(citas))

const handleSubmit = (e)=>{
    e.preventDefault()

    nuevaCita({
        id:uuid(),
        nombre,
        fecha,
        hora, 
        sintomas
    })
}

    return (
        <div className="card mt-5">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <h1> Agregar Citas</h1>
                    <hr />

                    <div className="orm-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
                        <div className="mb-4 mb-lg-0">
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                placeholder="Tu nombre"
                                autoComplete="off"
                                value={nombre}
                                onChange={handleInputChange}

                            />
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="date"
                                name="fecha"
                                className="form-control"
                                autoComplete="off"
                                value={fecha}
                                onChange={handleInputChange}
                            />
                        </div>

                        <label className="col-sm-4 col-lg-2 col-form-label">hora</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="time"
                                name="hora"
                                className="form-control"
                                autoComplete="off"
                                value={hora}
                                onChange={handleInputChange}

                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="form-group">
                            <textarea
                                name="sintomas"
                                className="form-control"
                                autoComplete="off"
                                 value={sintomas}
                                onChange={handleInputChange}>

                            </textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AgregarCitas