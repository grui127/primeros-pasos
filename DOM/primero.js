'use strict';
// --------------------VARIABLES------------------
// varaibles boton
let nav = document.querySelector("nav");
let btnMenu = document.querySelector(".btnMenu");
let secciones = document.querySelectorAll("nav a");

// varaibles hora y alarma
let inReloj = document.querySelector(".hora");
let prenderReloj = document.querySelector(".prenderReloj");
let apagarReloj = document.querySelector(".apagarReloj");
let prenderAlarma = document.querySelector(".prenderAlarma");
let apagarAlarma = document.querySelector(".apagarAlarma");
let audio = document.querySelector(".audio");

// variables de la pelota
let cancha = document.querySelector(".cancha");
let pelota = document.querySelector(".pelota");
let num1 = 0;
let num2 = 0;

// Varaibles Contador
let contador = document.querySelector(".contador");
let mensaje = document.querySelector(".mensaje");

// variable boton arriba
let btnArriba = document.querySelector(".btnArriba")

// variable modo oscuro
let modOsc = document.querySelector(".modOsc");
let valor = localStorage.getItem("valor");

// variables intento de responsive js
let machDiv = document.querySelector(".responsive-video");
    
if(window.innerWidth <= 1000){
 machDiv.innerHTML =`<a href="https://www.youtube.com/watch?v=UjhCDyklWJw">Enlace De Video Aqui</a><br>
                  <a href="https://goo.gl/maps/x1LPASN5RYAvkDsWA">Enlace de Mapa Aqui</a>`;
}
if(window.innerWidth > 1000){
   machDiv.innerHTML = `<iframe width="400" height="300" src="https://www.youtube.com/embed/UjhCDyklWJw" title="Secuencia de Heladeria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.886830778694!2d-58.56620728255616!3d-34.6070231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8231be1bf7b%3A0xddf9adefdb1f6ea5!2sCara%20Cruz!5e0!3m2!1ses-419!2sar!4v1657813142994!5m2!1ses-419!2sar" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

}

// variables validar URL
const form = document.getElementById("form1");
let cerrarVentana = document.getElementById("closeWindow");
let ventanilla;

// variable conexion
let body = document.querySelector(".body");

// variables camara device
let camaraDiv = document.querySelector(".camara");
let video = document.getElementById("video");

// variables de geolocalizacion
let geografia = document.querySelector(".geografia");
let mapas = document.querySelector(".maps");

// variables de buscador
let buscador = document.getElementById("buscador"),
    buscarEn = document.querySelectorAll(".foto");

// variables del sorteo 
let sorteo = document.querySelector(".sorteo").children;
let sortear = document.querySelector(".sortear");


// variables carrusel de fotos rapido
let btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    carrusel = document.getElementById("car"),
    carruText = document.querySelector(".carrusel figcaption");
let imgCarru = [
 "foto1.png","foto2.png","foto3.png","foto4.png",
]
let textCarru = ["UWU","Wasaski","Onichan","Borraca"]
let actual = 0;

// variables del scroll espia
let seccionesBody = document.querySelectorAll(".secciones")

let options = {
    rootMargin: '0px',
    threshold: 0.7
  }

// variables video inteligente.
let elVideo = document.getElementById("muteado");


// variables de la validacion del fryormulario
let $form = document.getElementById("form");
let $inputs = document.querySelectorAll(".divform input");
let $textarea = document.querySelector(".textarea");
let $btnEnviar = document.querySelector("#form button");


// ---------------------FUNCIONES----------------
// funciones del boton
btnMenu.addEventListener("click",()=>{
    nav.classList.toggle("btnActivo")
})
secciones.forEach(e=>{e.addEventListener("click",()=>{
        nav.classList.remove("btnActivo")
    })
})

// funciones alarma
const Reloj = ()=>{
    let dia = new Date;
    let hora = dia.getHours();
    let minutos = dia.getMinutes();
    let segundos = dia.getSeconds();

    if (hora < 10) {hora = "0" + hora}
    if (minutos < 10) {minutos = "0" + minutos}
    if (segundos < 10) {segundos = "0" + segundos}

    let reloj = hora + ":" + minutos + ":" + segundos;
    return reloj;
}

setInterval(()=>{
    inReloj.innerText = Reloj()
},1000)

prenderReloj.addEventListener("click",()=>{
    inReloj.classList.add("prender")
    prenderReloj.disabled =true;
})
apagarReloj.addEventListener("click",()=>{
    inReloj.classList.remove("prender")
    prenderReloj.disabled =false;
})
prenderAlarma.addEventListener("click",()=>{
    prenderAlarma.disabled =true;
    audio.loop = true
    audio.play()
})
apagarAlarma.addEventListener("click",()=>{
    prenderAlarma.disabled =false;
    audio.pause()
})


// funciones pelota y teclado
window.addEventListener("keydown",e=>{
     if(e.key == "ArrowUp"){
            num1 -= 20;
            pelota.style.top = `${num1}px`;           
        }
        if(e.key == "ArrowDown"){
            num1 += 20;
            pelota.style.top = `${num1}px`;
        }
        if(e.key == "ArrowLeft"){
            num2 -= 20;
            pelota.style.left = `${num2}px`;
       }
        if(e.key == "ArrowRight"){
            num2 += 20;
            pelota.style.left = `${num2}px`;
        }
        if(e.shiftKey && e.key == "A") {alert("esto es una alerta")}
        if(e.shiftKey && e.key == "P") {prompt("de quien es la cancion mi buenos aires querido?")}
        if(e.shiftKey && e.key == "C") {confirm('usted es medio pelotudo?')}
})
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);


// funciones contador
const cuentaAtras = () =>{
    // toma referencia de mes, dia, año en ese orden ni idea porque
    let fechadada = new Date('July 17, 2023 18:45:00'); 
    let fecha = new Date();
    let hoy = {
        año: fechadada.getFullYear() - fecha.getFullYear(),
        mes: fechadada.getMonth() - fecha.getMonth(),
        dia: fechadada.getDay() - fecha.getDay(),
        hora: fechadada.getHours() - fecha.getHours(),
        min: fechadada.getMinutes() - fecha.getMinutes() -1,
        seg: 59 + (fechadada.getSeconds() -  fecha.getSeconds()) 
    };  
    if(hoy.min < 0){
        hoy.min +=60;
        hoy.hora -=1
    }
    if(hoy.hora < 0){
        hoy.hora +=24;
        hoy.dia -=1
    }
    if(hoy.dia < 0){
        hoy.dia += 30;
        hoy.mes -=1
    }
    if(hoy.mes < 0){
        hoy.mes += 12;
        hoy.año -=1
    }
    if(hoy.año < 0)hoy.año = -1;
    
    let texto = `Faltan ${hoy.año} años, ${hoy.mes} meses, ${hoy.dia} dias, ${hoy.hora} horas, ${hoy.min} minutos y ${hoy.seg} segundos.`
   
    if(Object.values(hoy)[0] == -1) {
        console.log("terminado")
        mensaje.innerHTML = `<img src="cumple.png">`
        return clearInterval(intervalo);
    }
    return texto;     
}
let intervalo = setInterval(()=>{
    contador.innerText = cuentaAtras() || "finalizado!!";
},1000)


// funcion boton arriba

window.addEventListener("scroll",()=>{
    let ventana = window.innerHeight;
    let scrollPosition = window.scrollY;
    if(scrollPosition > 500) btnArriba.classList.add("btnActivo");
    else btnArriba.classList.remove("btnActivo");
})

// funciones modo oscuro
modOsc.addEventListener("click",e=>{

    if ( valor == null ) localStorage.setItem("valor",1);
    if ( localStorage.getItem("valor")  == '1'){
        document.documentElement.style.setProperty("--color1","#222");
        document.documentElement.style.setProperty("--color2","#fe0");
        document.documentElement.style.setProperty("--color3","#fe0c");
        document.documentElement.style.setProperty("--color4","#2229");
        document.documentElement.style.setProperty("--color5","#555");

        modOsc.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        
        return localStorage.setItem("valor",2);
    }
    if( localStorage.getItem("valor")  == '2') { 
        document.documentElement.style.setProperty("--color1","#fe0");
        document.documentElement.style.setProperty("--color2","#222");
        document.documentElement.style.setProperty("--color3","#2229");
        document.documentElement.style.setProperty("--color4","#fe0c");
        document.documentElement.style.setProperty("--color5","#fff");
        
        modOsc.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            
        return localStorage.setItem("valor",1);
    }
})

// funcion responsive js
window.window.addEventListener("resize",e=>{
    
    if(window.innerWidth <= 1000){
        machDiv.innerHTML =`<a href="https://www.youtube.com/watch?v=UjhCDyklWJw">Enlace De Video Aqui</a><br>
                            <a href="https://goo.gl/maps/x1LPASN5RYAvkDsWA">Enlace de Mapa Aqui</a>`;

    }
    else machDiv.innerHTML = `<iframe width="400" height="300" src="https://www.youtube.com/embed/UjhCDyklWJw" title="Secuencia de Heladeria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.886830778694!2d-58.56620728255616!3d-34.6070231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8231be1bf7b%3A0xddf9adefdb1f6ea5!2sCara%20Cruz!5e0!3m2!1ses-419!2sar!4v1657813142994!5m2!1ses-419!2sar" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

})


// Funciones Validar URL

document.addEventListener("DOMContentLoaded",function(){
    form.addEventListener("submit",validarForm);
    cerrarVentana.addEventListener("click",closeDoor)
    
})

function validarForm(e){
    e.preventDefault(); 
    let probarURL = document.querySelector(".probarURL").value,
    altura = document.querySelector(".altura").value,
    anchura = document.querySelector(".anchura").value;
    
    if (probarURL !== 0 && altura > 200 && anchura > 200) {
       return ventanilla = window.open(probarURL,"hola",`width=${anchura},height=${altura},scrollbars=NO`)
    }
    else console.log("error")
}
function closeDoor(){
    ventanilla.close()
}


// funcion detectar conexion
window.addEventListener("online",()=>{
    body.innerHTML += `<h2 class="online">Recuperaste la Conexion</h2>`;

})

window.addEventListener("offline",()=>{
   body.innerHTML += `<h2 class="offline">Perdiste la Conexion</h2>`;

})

// funciones camara device
async function mostrarCamara(){
    try{
    const camara = await navigator.mediaDevices.getUserMedia({video: {width:700 , height: 400}});
    acceso(camara)
    }
    catch(e){
        console.log(e)
    }
}
function acceso(camara){
    window.camara = camara;
    video.srcObject = camara;
    }

mostrarCamara()

// GEOLOCALIZACION 
 const ubicacion = ()=>{
    navigator.geolocation.getCurrentPosition(posicion=>{
     let carta = posicion.coords;
     let cords = {
        lat: carta.latitude,
        lng: carta.longitude
    }

     geografia.innerHTML = `
     <br>
     <p>COORDENADAS DE LA PC<p>
     <br>
     <ul>
        <li>Latitud: ${carta.latitude}</li>
        <br>
        <li>Longitud: ${carta.longitude}</li>
        <br>
        <li>Aproximacion: ${Math.floor(carta.accuracy)} <b>metros</b></li>
     </ul>
     `
    let googleMap = new google.maps.Map(mapas,{
        zoom: 10,
        center: cords
    })
    
    let marcador = new google.maps.Marker({
        position: cords,
        map: googleMap
    })

    

    },err=>console.log(err))
 }

ubicacion();


// funciones de buscador

buscador.addEventListener("keyup",e=>{
    for (let i = 0; i < buscarEn.length ;i++){
        if(!(buscarEn[i].innerText.includes(buscador.value))){
            buscarEn[i].classList.add("desaparecer");
        }
        else buscarEn[i].classList.remove("desaparecer");
    }
})

// funcion sorteo

sortear.addEventListener("click",e=>{ 
   let random = Math.random()*10;
   let ganador = Math.floor(random);
    alert(`el ganador es ${sorteo[ganador].textContent}`)
})


// funcion carrusel de fotos rapido


btnRight.addEventListener("click",e=>{
    for (actual; actual < imgCarru.length-1; actual++){
        if(imgCarru[actual] == carrusel.getAttribute("src")){
         carrusel.setAttribute("src",imgCarru[++actual]);
         carruText.textContent = textCarru[actual];
        return actual
        }
    }
})

btnLeft.addEventListener("click",e=>{
    for (actual; actual > 0; actual--){
        if(imgCarru[actual] == carrusel.getAttribute("src")){
         carrusel.setAttribute("src",imgCarru[--actual]);
         carruText.textContent = textCarru[actual];
        return actual
        }
    }
})

// funciones del scroll spia
// secciones body es el del cuerpo y secciones el nav

const loqueseve = entradas=>{
    for (let e of entradas) {
        if (e.isIntersecting) {
           let pos = e.target.children[0].textContent.slice(-2) ;
           let pos2 = Number(pos) -1;
           console.log(pos2)
          
            secciones[pos2].style.background = "var(--color1)";
            secciones[pos2].style.color = "var(--color2)";
            
            secciones[pos2 +1].style.background = "var(--color2)";
            secciones[pos2 +1].style.color = "var(--color1)";
            secciones[pos2 -1].style.background = "var(--color2)";
            secciones[pos2 -1].style.color = "var(--color1)";
            
            secciones[pos2 +2].style.background = "var(--color2)";
            secciones[pos2 +2].style.color = "var(--color1)";
            secciones[pos2 -2].style.background = "var(--color2)";
            secciones[pos2 -2].style.color = "var(--color1)";
        }       
    }     
}
const observer = new IntersectionObserver(loqueseve,options);

for (const seccion of seccionesBody){
    observer.observe(seccion);
}

// funciones de video inteligente

const verVideo = (entry) =>{
    if(entry[0].isIntersecting){
        setTimeout(e=>{
             if(elVideo.paused) elVideo.play();
        },1000)  
    }
    if(!(entry[0].isIntersecting)){
        setTimeout(e=>{
            elVideo.pause()
        },1000)
    }
}

const obserVideo = new IntersectionObserver(verVideo,{
    threshold:0.8
})
obserVideo.observe(elVideo)

document.addEventListener("visibilitychange",e=>{
    if(!(document.visibilityState === "visible")) {
        elVideo.muted = true;
    }
    else elVideo.muted = false;
})

// funciones del formulario valido

function validar(){
        let exp1 = new RegExp(/\W/g);
        let largo =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let exp2 = new RegExp(largo);
    
        if(typeof $inputs[0].value !== "string"){alert("el valor no es un string"); return false}
        if(typeof $inputs[1].value !== "string"){alert("el valor no es un string"); return false}
        if(typeof $inputs[2].value !== "string"){alert("el valor no es un string"); return false}
        if($inputs[0].value.length > 100){alert("el valor tiene mas de 100 caracteres"); return false}    
        if($inputs[1].value.length > 100){alert("el valor tiene mas de 100 caracteres"); return false}
        if($inputs[2].value.length > 100){alert("el valor tiene mas de 100 caracteres"); return false}
        if(exp1.test($inputs[0].value)) {alert("introduce tu nombre sin simbolos"); return false}
        if(exp1.test($inputs[2].value)) {alert("introduce tu asunto sin simbolos"); return false}
        if(!exp2.test($inputs[1].value)) {alert("por favor introduzca un mail valido"); return false}
        if(typeof $textarea.value !=="string"){alert("el valor no es un string"); return false}
        if($textarea.value.length > 500){alert("el valor tiene mas de 500 caracteres"); return false}
        if(exp1.test($textarea.value)){alert("introduce tu comentario sin simbolos"); return false}
        else return true
}

document.addEventListener("submit",e=>{
    if(e.target !== $form)return ;
    e.preventDefault();
    if (!(validar())) {return console.log("por favor volve a intentarlo")}
    else { $form.submit()}
})

// funciones del narrador de voz

let $narrador = document.getElementById("narrador"); 
let $voces = document.querySelector(".selector");
let $narrar = document.querySelector(".text-select");
let $btnHablar = document.querySelector(".hablar");

const synth = window.speechSynthesis;
let voices = [];

function listaVoces(){
    voices = synth.getVoices();

    for (let i = 0; i < voices.length ; i++) {
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
    
        if(voices[i].default) {
          option.textContent += ' — DEFAULT';
        }
        $voces.appendChild(option);
      }
}

listaVoces();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = listaVoces;
  }

$narrador.addEventListener("submit",(e)=> {
        if(e.target != $narrador) return;
        e.preventDefault();
        const utterThis = new SpeechSynthesisUtterance($narrar.value);
        const selectedOption = $voces.selectedOptions[0];
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterThis.voice = voices[i];
            }
        }
        synth.speak(utterThis);
    })
