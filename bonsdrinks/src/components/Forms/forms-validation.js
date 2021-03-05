export default function validation (values) {
        const nome = document.getElementsByClassName('nome')
        const email = document.getElementsByClassName('email')
        const texto = document.getElementsByClassName('texto')
        const form = document.getElementsByClassName('borda-direita')
        const erro =document.getElementsByClassName('erro')

        form.addEventListener('submit', (e) => {

            let message = []
            if (nome.value === '' || nome.value === null) {
                message.push('Digite o seu nome')
            } if(nome.length > 0) {
                e.preventDefault()
                erro.innerText = message.join(', ')
            }

            
        })
}
