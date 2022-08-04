const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const formulario = document.querySelector('#from');

from.addEventListener("submit", sumandoInput);


function sumandoInput (event) {
 event.preventDefault();
 console.log(event);
 dato1 = parseInt(input1.value);
 dato2 = parseInt(input2.value);
 const sumaInput = dato1 + dato2;
 pResult.textContent = `Resultado: ${sumaInput}`;
}
