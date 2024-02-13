
contador = 0
let tableContainer = document.querySelector('.tableBody')

const form = document.querySelector('.formField')
let formInputs = document.getElementsByClassName('form-input')
let inputsGuardados = JSON.parse(localStorage.getItem('datosNuevaFila'))
let formInputsArray = inputsGuardados ? inputsGuardados : []

class Row {
    constructor(cliente, destino, solicitante, unidades, demora, bultos, lluvia, fuera) {
        this.cliente = cliente
        this.destino = destino
        this.solicitante = solicitante
        this.unidades = unidades
        this.demora = demora
        this.bultos = bultos
        this.lluvia = lluvia
        this.fuera = fuera
        this.date = date
    }
}

let cliente 
let destino  
let solicitante  
let unidades  
let demora  
let bultos  
let lluvia 
let fuera 
let date

let fecha = document.getElementById('fecha')
let newDate = localStorage.getItem('dateTime')
fecha.value = newDate

form.addEventListener('submit', (evt) => {
    cliente = form.validationServer01.value
    destino = form.validationServer02.value
    solicitante = form.validationServerUsername.value
    unidades = form.validationServer03.value
    demora = form.validationServer04.value
    bultos = form.validationServer05.value
    lluvia = form.invalidCheck3.checked
    fuera = form.invalidCheck4.checked
    date = fecha.value

    let nuevaFila = new Row(cliente, destino, solicitante, unidades, demora,bultos, lluvia, fuera, date)
    formInputsArray.push(nuevaFila)
    localStorage.setItem('dateTime', date)
    localStorage.setItem('datosNuevaFila', JSON.stringify(formInputsArray))
    // for (let i= 0; i < formInputs.length; i++) {
    //     formInputsArray.push(formInputs[i].value)
    //     localStorage.setItem('datosNuevaFila', JSON.stringify(formInputs[i].value))
    // }
    // for (input in formInputs) {
    //     formInputsArray.push(formInputs[input].value)
    // }
})
renderRow()

let dateSubmit = document.querySelector('.dateForm')


dateSubmit.addEventListener('submit', ()=> {
    date = fecha.value
    localStorage.setItem('dateTime', date)
    renderRow()
})

function renderRow() {
    let newRow = JSON.parse(localStorage.getItem('datosNuevaFila'))

    // newRow.forEach(roww => {
        
    // });
    for (let i = 0; i < newRow.length; i++) {
        // let obj[i] = newRow[i];
        if (newDate == newRow[i].date) {
            tableContainer.innerHTML +=`
            <td>${++contador}</td>
            <td>${newRow[i].cliente}</td>
            <td>${newRow[i].destino}</td>
            <td>${newRow[i].solicitante}</td>
            <td>${newRow[i].unidades}</td>
            <td>${newRow[i].demora}</td>
            <td>${newRow[i].bultos}</td>
            <td>${newRow[i].lluvia}</td>
            <td>${newRow[i].fuera}</td>
            `
        }
    }
}