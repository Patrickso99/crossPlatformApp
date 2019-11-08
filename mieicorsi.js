const nomeDelCorso = document.querySelector('#nomeDelCorso')
const voto = document.querySelector('#voto')
const bottoneAggiungi = document.querySelector('#bottoneAggiungi')
const bottoneCancella = document.querySelector('#bottoneCancella')
const listaCorsiConCosto = document.querySelector('#listaCorsiConCosto')
const spesaTotaleOutput = document.querySelector('#spesaTotale')
const mediaOutput = document.querySelector('#media')

const alertController = document.querySelector('ion-alert-controller')

let spesaTotale = 0
let media = 0

function noNaturalNumber(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 101 || charCode == 69)
        return false;

    return true;
}

const cancella = () => {
    nomeDelCorso.value = ''
    voto.value = ''
}
bottoneCancella.addEventListener('click', cancella)
bottoneAggiungi.addEventListener('click', () => {

    // Prendo i valori dall'html e li metto in una costante
    const nomeDelCorsoInserito = nomeDelCorso.value
    const votoInserito = voto.value

    if (
        votoInserito <= 0
        || votoInserito > 5
        || votoInserito.trim().length <= 0
        || nomeDelCorsoInserito.trim().length <= 0
    ) {
        // alert('Valori non validi')
        alertController.create({
            message: 'Inserisci solo valori validi, non sono ammese spese a costo zero o materie che non esistono!',
            header: 'Valore o valori non validi',
            buttons: ['Ok']
        }).then(alertElem => {
            alertElem.present()
        })
        cancella()
        return
    }

    console.log('Totale: € ', nomeDelCorsoInserito, votoInserito)
    const nuovoElem = document.createElement('ion-item')
    nuovoElem.textContent = nomeDelCorsoInserito + ': € ' + votoInserito
    listaCorsiConCosto.appendChild(nuovoElem)

    // +variabileStringa la transforma in numero
    spesaTotale += +votoInserito
    console.log('Totale', spesaTotale)
    spesaTotaleOutput.textContent = 'Spesa totale: €' + spesaTotale
    cancella()
})