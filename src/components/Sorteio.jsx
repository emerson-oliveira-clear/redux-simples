import './Sorteio.css'
import React from 'react'
import Card from './Card'

export default props => {

    const {min, max} = props
    const aleatorio = Math.floor(Math.random() * (max - min) + min)

    return (

        <Card title='Media dos numeros' green>
            <div >
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}