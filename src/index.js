//const btn = document.getElementById('btn');
//btn.addEventListener('click', 2do parámetro);
//btn.addEventListener('click', () => { alert(`Hola! Mucho gusto en conocerte`);});
//? ? ()=> { } ??
const cifrarUser= document.getElementById("pagecifrar");
cifrarUser.addEventListener("click",() => {document.getElementById("page1").style.display="none"
document.getElementById("page2").style.display="block";})

const descifraUser= document.getElementById("pagedescifrar");
descifraUser.addEventListener("click",function descifraUser(){document.getElementById("page1").style.display="none"
document.getElementById("page3").style.display="block";})

const regresarInicio= document.getElementById("backto-page1");
regresarInicio.addEventListener("click",function regresarInicio(){document.getElementById("page1").style.display="block"
document.getElementById("page2").style.display="none"
document.getElementById("page3").style.display="none"})


const regresarInicio2= document.getElementById("b-pg1");
regresarInicio2.addEventListener("click",function regresarInicio2(){document.getElementById("page1").style.display="block"
document.getElementById("page2").style.display="none"
document.getElementById("page3").style.display="none"})


const resultadoCifrado = document.getElementById("usuario-cifrado");
const ejecutaCifrado = document.getElementById("EJECUTA-CIFRADO");
ejecutaCifrado.addEventListener("click", ()=>{
  const offc = document.getElementById("offset-cifrado").value;
  const ingresaUserNew = document.getElementById("ingresa-usuarionuevo").value;
  resultadoCifrado.innerHTML = cipher.encode(parseInt(offc),ingresaUserNew);
})

const resultadoDescifrado = document.getElementById("usuario-real");
const ejecutaDescifrado = document.getElementById("EJECUTA-DESCIFRADO");
ejecutaDescifrado.addEventListener("click", ()=>{
const offd = document.getElementById("offset-descifrado").value;
const ingresaUserC = document.getElementById("ingresa-usuariocifrado").value;
resultadoDescifrado.innerHTML = cipher.decode(parseInt(offd),ingresaUserC);
})
