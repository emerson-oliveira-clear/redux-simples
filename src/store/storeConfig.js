import { createStore,combineReducers } from "redux";


const reducers = combineReducers({
    numeros:function(state,action){
        console.log(state, ' ',action)
        return{
            min:1,
            mas:10
        }
    },
    nomes:function(state,action){
        console.log(state, ' ',action)
        return ['Miguelito', 'Lorem', 'Ipsum']
    }
})


function storeConfig(){
    return createStore (reducers)
}

export default storeConfig