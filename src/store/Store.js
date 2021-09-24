import { createStore, combineReducers } from "redux";
import CitasReducer from "../reducer/CitasReducer";
import { obtenerStateStorage, guardarStateStorage } from "../LocalStorage";


const reducer = combineReducers({
  citas: CitasReducer,
});

const storageState = obtenerStateStorage()

export const Store = createStore(
  reducer,
  storageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


Store.subscribe(() => {
  guardarStateStorage(
      {citas: Store.getState().citas
    })
});
