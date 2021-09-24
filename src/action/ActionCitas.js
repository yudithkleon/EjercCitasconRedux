import { types } from "../type/types";

export const AgregarCita=(citas)=> {

    return {
        type: types.agregar,
        payload:citas
    }
}

export const BorrarCita=(id) =>{
    return {
        type: types.borrar,
        payload:id
}
}