
let otravez = localStorage.getItem("valor");
   

window.addEventListener("load",e=>{
    let modOsc = document.querySelector(".modOsc");
    console.log("pagina cargada")    

    if ( parseInt(otravez) === 2){
        document.documentElement.style.setProperty("--color1","#222");
        document.documentElement.style.setProperty("--color2","#fe0");
        document.documentElement.style.setProperty("--color3","#fe0c");
        document.documentElement.style.setProperty("--color4","#2229");
        document.documentElement.style.setProperty("--color5","#555");
         
        modOsc.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
    if( parseInt(otravez) === 1) { 
        document.documentElement.style.setProperty("--color1","#fe0");
        document.documentElement.style.setProperty("--color2","#222");
        document.documentElement.style.setProperty("--color3","#2229");
        document.documentElement.style.setProperty("--color4","#fe0c");
        document.documentElement.style.setProperty("--color5","#fff");
        
        modOsc.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
})


