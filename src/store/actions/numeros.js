
//action Creator
export function alteraNumeroMinino(novoNumero){
    return{
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}

export function alteraNumeroMaximo(novoNumero){
    return{
        type: 'NUM_MAX_ALTERADO',
        payload: novoNumero
    }
}