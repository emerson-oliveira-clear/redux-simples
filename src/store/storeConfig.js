import { createStore, combineReducers } from "redux";

import numerosReducer from './reducers/numeros'

const reducers = combineReducers({
    numeros: numerosReducer,
    nomes: function (state, action) {
        console.log('reducer nomes...')
        console.log(state, ' ', action)
        return ['Miguelito', 'Bia', 'Miguel']
    }
})


function storeConfig() {
    return createStore(reducers)
}

export default storeConfig