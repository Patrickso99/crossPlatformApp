const motivoSpesa = document.querySelector('#motivo-spesa')
const importoSpesa = document.querySelector('#importo-spesa')
const aggiungiBottone = document.querySelector('#aggiungi-bottone')
const cancellaBottone = document.querySelector('#cancella-bottone')
const listaSpesa = document.querySelector('#list-spesa')

const cancellaForm = () => {
    motivoSpesa.value = ''
    importoSpesa.value= ''
}

cancellaBottone.addEventListener('click', cancellaForm)
aggiungiBottone.addEventListener('click', () => {
    const motivoInserito = motivoSpesa.value
    const importoInserito = importoSpesa.value

    if(importoInserito <= 0 || importoInserito.trim().length <= 0 || motivoInserito.trim().lenght <= 0)
    {

    }
    else
    {
        console.log('SPESA: €', importoInserito, motivoInserito)
        const nuovoElemento = document.createElement('ion-item')
        nuovoElemento.textContent = motivoInserito + ': € ' + importoInserito
        listaSpesa.appendChild(nuovoElemento)
        cancellaForm()
    }
})