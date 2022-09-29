import { useState } from 'react';
import '../App.css';

function Formulario() {
    const [valueForm, setValueForm] = useState('');

    const inputValue = document.getElementById('email');
    const textAreaValue = document.getElementById('textarea-form');
    const msgFormSubmit = document.getElementById('completed');

    const handleValue = (e) => {
        e.preventDefault();
        setValueForm('');
        inputValue.value = '';
        textAreaValue.value = '';    
        msgFormSubmit.innerHTML = `Obrigado ${valueForm}, pelo seu Feedback!`;
        setTimeout(() => msgFormSubmit.remove(), 4000);
        
    };
    

    return (
        <div className="container-form">
            <div id="title-form">
                <h2>Formulário</h2>
            </div>

            <form className="form">
                <label htmlFor="">Primeiro nome:</label>
                <input
                    onChange={(e) => setValueForm(e.target.value)}
                    type="text"
                    value={valueForm}
                    required
                />
                <label htmlFor="">Email:</label>
                <input type="email" id="email" required />

                <h4>Escreva seu Feedback</h4>
                <textarea
                    placeholder="Deixe seu Feedback..."
                    id="textarea-form"
                    required
                    maxLength={150}
                ></textarea>
                <button onClick={handleValue}>Enviar</button>

                <h3 id="completed"></h3>
            </form>
        </div>
    );
}

export default Formulario;
