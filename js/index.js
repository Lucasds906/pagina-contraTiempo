
contador = 0
let tableContainer = document.querySelector('.tableBody')

const form = document.querySelector('.formField')
let formInputs = document.getElementsByClassName('form-input')
console.log(formInputs)
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

form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    ++contador
    cliente = form.validationServer01.value
    destino = form.validationServer02.value
    solicitante = form.validationServerUsername.value
    unidades = form.validationServer03.value
    demora = form.validationServer04.value
    bultos = form.validationServer05.value
    lluvia = form.invalidCheck3.checked
    fuera = form.invalidCheck4.checked
    let nuevaFila = new Row(cliente, destino, solicitante, unidades, demora,bultos, lluvia, fuera)
    formInputsArray.push(nuevaFila)
    localStorage.setItem('datosNuevaFila', JSON.stringify(formInputsArray))

    tableContainer.innerHTML +=`
        
            <td>${contador}</td>
            <td>${cliente}</td>
            <td>${destino}</td>
            <td>${solicitante}</td>
            <td>${unidades}</td>
            <td>${demora}</td>
            <td>${bultos}</td>
            <td>${lluvia}</td>
            <td>${fuera}</td>
        
    `

    // for (let i= 0; i < formInputs.length; i++) {
    //     formInputsArray.push(formInputs[i].value)
    //     localStorage.setItem('datosNuevaFila', JSON.stringify(formInputs[i].value))
    // }
    // for (input in formInputs) {
    //     formInputsArray.push(formInputs[input].value)
    // }
})
let newRow = JSON.parse(localStorage.getItem('datosNuevaFila'))
function renderRow() {

}

























    // let newTableRow = tableContainer.insertRow(-1)
    // let newTableRowRef = newTableRow.insertCell(0)
    // newTableRowRef.textContent = JSON.parse(localStorage.getItem('cont'))
    // localStorage.setItem('cont', JSON.stringify(contador))
    // newTableRowRef = newTableRow.insertCell(1)
    // newTableRowRef.textContent = form.validationServer01.value
    // newTableRowRef = newTableRow.insertCell(2)
    // newTableRowRef.textContent = form.validationServer02.value
    // newTableRowRef = newTableRow.insertCell(3)
    // newTableRowRef.textContent = form.validationServerUsername.value
    // newTableRowRef = newTableRow.insertCell(4)
    // newTableRowRef.textContent = form.validationServer03.value
    // newTableRowRef = newTableRow.insertCell(5)
    // newTableRowRef.textContent = form.validationServer04.value
    // newTableRowRef = newTableRow.insertCell(6)
    // newTableRowRef.textContent = form.validationServer05.value
    // newTableRowRef = newTableRow.insertCell(7)
    // if (invalidCheck3.checked) {
    //     form.invalidCheck3.value = 'Sí'
    //     newTableRowRef.textContent = form.invalidCheck3.value
    // } else {
    //     form.invalidCheck3.value = 'No'
    //     newTableRowRef.textContent = form.invalidCheck3.value
    // }
    // newTableRowRef = newTableRow.insertCell(8)
    // newTableRowRef.textContent = form.invalidCheck4.value
    // if (invalidCheck4.checked) {
    //     form.invalidCheck4.value = 'Sí'
    //     newTableRowRef.textContent = form.invalidCheck4.value
    // } else {
    //     form.invalidCheck4.value = 'No'
    //     newTableRowRef.textContent = form.invalidCheck4.value
    // }

