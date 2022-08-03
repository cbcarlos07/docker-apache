const labels = document.querySelectorAll('form label')
const inputs = document.querySelectorAll('form input')


inputs.forEach((input) => {
    input.addEventListener('input', ocultaLabel)
})

function ocultaLabel(e) {
    if(e.target.type !== 'checkbox'){
        const id = e.target.getAttribute('id')
    const idLabel = '#label_'+id
    if(e.target.value !== ''){
        
        document.querySelector(idLabel).style.display = 'none'
     } else {
        document.querySelector(idLabel).style.display = 'block'
     }
    }
}

//mascaras

const masks = {
    cpf (value) {
        return value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1')
    },

    phone (value) {
        return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2').replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3').replace(/(-\d{4})\d+?$/, '$1')
    },

}


document.querySelectorAll('input').forEach((input) => {
    if(input.type !== 'checkbox'){
        input.addEventListener('input', (e) => {
            e.target.value = masks[field](e.target.value)
        }, false)
    }
    const field = input.dataset.js
    
})