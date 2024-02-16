
contador = 0
let arrayUnidades = []
let arrayDemora = []
let arrayBultos = []
let arrayLluvia = []
let arrayFuera = []
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

let uni = 0
let dem = 0
let bul = 0
let llu = 0
let fue = 0
let tot = 0

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

let tableFoot = document.querySelector('.tableFoot')

for (ar of arrayUnidades) {
    uni += parseFloat(ar)
}
for (ar of arrayDemora) {
    if (ar !== "") {
        dem += parseInt(ar)
    }
}
for (ar of arrayBultos) {
    if (ar !== "") {
        bul += parseInt(ar)
    }
}

for (let i = 0; i < arrayLluvia.length; i++) {
    if (arrayLluvia[i] === true){
        llu += parseFloat(arrayLluvia[i + 1])* .5
    }
}

for (let i = 0; i < arrayFuera.length; i++) {
    if (arrayFuera[i] === true){
        fue += parseFloat(arrayFuera[i + 1])* .5
    }
}

tot += uni*1552.50 + ((dem/60)*2328.75)

tableFoot.innerHTML +=`
                <tr>
                    <th scope="col"></th>
                    <th scope="col">$${tot.toLocaleString()}</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">${uni}</th>
                    <th scope="col">${dem}</th>
                    <th scope="col">${bul}</th>
                    <th scope="col">${llu}</th>
                    <th scope="col">${fue}</th>
                </tr>
`

// function calucularTotales(variable, array) {
//     for (ar of array) {
//         variable += parseFloat(ar)
//     }
// }

function renderRow() {
    let newRow = JSON.parse(localStorage.getItem('datosNuevaFila'))
    for (let i = 0; i < newRow.length; i++) {
        if (newDate == newRow[i].date) {
            let lluviaTrue 
            if (newRow[i].lluvia == true) {
                lluviaTrue = 'si'
            } else {
                lluviaTrue = 'no'
            }
            tableContainer.innerHTML +=`
            <td>${++contador}</td>
            <td>${newRow[i].cliente}</td>
            <td>${newRow[i].destino}</td>
            <td>${newRow[i].solicitante}</td>
            <td>${newRow[i].unidades}</td>
            <td>${newRow[i].demora}</td>
            <td>${newRow[i].bultos}</td>
            <td>${lluviaTrue}</td>
            <td>${newRow[i].fuera}</td>
            <td>${newRow[i].unidades*1552.50 + ((newRow[i].demora/60)*2328.75) + newRow[i].bultos*546.25}</td>
            `
            // if (newRow[i].lluvia) {

            // }

            arrayUnidades.push(newRow[i].unidades)
            arrayDemora.push(newRow[i].demora)
            arrayBultos.push(newRow[i].bultos)
            arrayLluvia.push(newRow[i].lluvia, newRow[i].unidades)
            arrayFuera.push(newRow[i].fuera, newRow[i].unidades)
        }
    }
}


// Hacer que se pueda eliminar elementos del storage