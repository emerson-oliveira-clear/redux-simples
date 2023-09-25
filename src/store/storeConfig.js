import { createStore,combineReducers } from "redux";


const reducers = combineReducers({
    numeros:function(state,action){
        //console.log(state, ' ',action)
        return{
            min:7,
            max:31
        }
    },
    nomes:function(state,action){
        //console.log(state, ' ',action)
        return ['Miguelito', 'Bia', 'Miguel']
    }
})


function storeConfig(){
    return createStore (reducers)
}

export default storeConfig