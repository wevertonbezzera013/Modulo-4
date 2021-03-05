import React, { useState  } from 'react';
import './forms.css'
import './forms-validation'
class Forms extends React.Component {
    render() {
        return(
            <>
                <div className="erro"></div>
                <div className='form-container'>
                    <div className='form-content-left'>
                        <div className='txt-left'>Nos conte tudinho.</div><br/>
                        <i class="fas fa-wine-glass-alt"></i>
                    </div>

                    <div className='form-content-right'>
                        <div className='borda-direita'>
                            <label for="nome" className="nome">Digite seu nome completo</label><br/>
                            <input className='form-inputs' type="text" placeholder="Nome Sobrenome"></input>

                            <label for="email" className="email">Digite seu E-mail</label><br/>
                            <input className='form-inputs' type="text" placeholder="email@exemplo.com"></input>

                            <label for="texto">Digite seu texto</label>
                            <textarea id="texto" className='texto' rows="4" cols="44" placeholder="Eu gostaria de dizer que...">
                            </textarea> 


                            <button className='form-input-btn'>Enviar</button>
                        </div>

                    </div>
                    
                </div>
            </>
            
        )
    }
}

export default Forms;