import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { BorrarCita} from '../action/ActionCitas'
const ListarCitas = () => {

    const { citas } = useSelector((state) => state.citas)

const dispatch = useDispatch()

const handleDelete =(id)=>{
     dispatch(BorrarCita(id))
}


    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">Agenda</h2>
                <div className="lista-citas">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Fractura</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                citas.map(citas => {
                                    return (
                                        <tr key={citas.id}>
                                            <td>{citas.nombre}</td>
                                            <td>{citas.fecha}</td>
                                            <td>{citas.hora}</td>
                                            <td>{citas.sintomas}</td>
                                            <td><button className="btn btn-danger"
                                            onClick={()=>handleDelete(citas.id)}
                                            >
                                                Borrar &times;
                                            </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    )
}

export default ListarCitas
