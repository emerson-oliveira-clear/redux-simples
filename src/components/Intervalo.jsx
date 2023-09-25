import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alteraNumeroMinino, alteraNumeroMaximo } from '../store/actions/numeros'

function Intervalo(props) {
    const { min, max } = props
  


    return (
        <Card title='Intervalo de numeros' red>
            <div className='Intervalo'>
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={min}  onChange={e => props.alteraMinimo(+e.target.value)}/>
                </span>

                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => props.alteraMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        alteraMinimo(novoNumero) {

           const action =  alteraNumeroMinino(novoNumero)

           dispatch(action)
        },

        alteraMaximo(novoNumero) {

            const action =  alteraNumeroMaximo(novoNumero)
 
            dispatch(action)
         }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Intervalo)




    