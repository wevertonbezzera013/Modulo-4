import React, { Component } from 'react';
import './forms.css'

class Forms extends React.Component {
    render() {
        return(
            <section>
                <input id="firstName" type="text" placeholder="Nome completo"></input>
                <input id="lastName" type="text" placeholder="E-mail"></input>
                <textarea type="text" placeholder="Escreva seu texto aqui."></textarea>
                <button className="send-btn">Enviar</button>
            </section>
            
        )
    }
}

export default Forms;