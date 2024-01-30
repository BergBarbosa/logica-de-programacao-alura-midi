/*function tocaSom(idElementoAudio) {
   document.querySelector(idElementoAudio).play();
}

const listasDeTeclas = document.querySelectorAll('.tecla');
const listaDeSons = document.querySelectorAll('#som')


let contador = 0;
while (contador < listasDeTeclas.length) {

   const tecla = listasDeTeclas[contador];
   const instrumento = tecla.classList[1];
   const idAudio = `#som_${instrumento}`

   console.log(idAudio)

   tecla.onclick = function () {
      tocaSom(idAudio)
   }
   contador++
   console.log(contador)
}*/


function tocaSom(seletorAudio) {
   const elemento = document.querySelector(seletorAudio)

   if (elemento && elemento.localName === 'audio') {
      elemento.play();
   } else {
      alert('Elemento não encontrado ou seletor inválido.');
   }
}

const listasDeTeclas = document.querySelectorAll('.tecla');
const listaDeSons = document.querySelectorAll('#som');


for (let contador = 0; contador < listasDeTeclas.length; contador++) {
   const teclas = listasDeTeclas[contador];
   const instrumento = teclas.classList[1];
   const somDoInstrumento = `#som_${instrumento}` //template string

   teclas.onclick = function () {
      tocaSom(somDoInstrumento);
   }

   teclas.onkeydown = function (evento) {
      if (evento.code === 'Enter' || evento.code === 'Space') {
         teclas.classList.add('ativa');
      }
   }

   teclas.onkeyup = function () {
      teclas.classList.remove('ativa');
   }
}
