let celciusinp = document.querySelector('#cel')
let farinp = document.querySelector('#fah')
let kelinp = document.querySelector('#kel')


function roundoff(num){
    return Math.round(num*100)/100;
}

celciusinp.addEventListener('input', () => {
    let celval = parseFloat(celciusinp.value);
    let celtofar = (celval) * (9 / 5) + 32;
    let celtokel = (celval + 273.15)
    farinp.value = roundoff(celtofar)
    kelinp.value =roundoff(celtokel)
})

farinp.addEventListener('input', () => {
    let farval = parseFloat(farinp.value);
    let fartocel = ((farval - 32) * 5 / 9);
    let fartokel = ((farval - 32) * (5 / 9) + 273.15)
    celciusinp.value =roundoff (fartocel)
    kelinp.value = roundoff( fartokel)
})

kelinp.addEventListener('input', () => {
    let kelval = parseFloat(kelinp.value)
    let keltocel = kelval - 273.15;
    let keltofar = ((kelval - 273.15) * 9 / 5 + 32)
    celciusinp.value =roundoff( keltocel)
    farinp.value =roundoff( keltofar)
})

// celciusinp.onchange=function(){
//     let celval = parseFloat(celciusinp.value);
//     let celtofar = (celval) * (9 / 5) + 32;
//     let celtokel = (celval + 273.15)
//     farinp.value = roundoff(celtofar)
//     kelinp.value =roundoff(celtokel)
// }

// farinp.onchange= function() {
//     let farval = parseFloat(farinp.value);
//     let fartocel = ((farval - 32) * 5 / 9);
//     let fartokel = ((farval - 32) * (5 / 9) + 273.15)
//     celciusinp.value =roundoff (fartocel)
//     kelinp.value = roundoff( fartokel)
// }

// kelinp.onchange= function()  {
//     let kelval = parseFloat(kelinp.value)
//     let keltocel = kelval - 273.15;
//     let keltofar = ((kelval - 273.15) * 9 / 5 + 32)
//     celciusinp.value =roundoff( keltocel)
//     farinp.value =roundoff( keltofar)
// }
