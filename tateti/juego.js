const d = document;
const body = d.querySelector("body")
let $container = d.querySelector(".container");
let $cajas = d.querySelectorAll(".caja");
const reset = d.getElementById("reset");
let marca = [`<label class="X">X</label>`,`<label class="O">O</label>`]
let i = 2;	
let winCondition = [
[$cajas[0],$cajas[1],$cajas[2]],
[$cajas[0],$cajas[4],$cajas[8]],
[$cajas[0],$cajas[3],$cajas[6]],
[$cajas[1],$cajas[4],$cajas[7]],
[$cajas[2],$cajas[4],$cajas[6]],
[$cajas[2],$cajas[5],$cajas[8]],
[$cajas[3],$cajas[4],$cajas[5]],
[$cajas[6],$cajas[7],$cajas[8]],
]

let player1 =[]
let player2 =[]

let ganador;

function gano(){
	const mensaje = d.createElement("div");
	mensaje.classList.add("mensaje")
	mensaje.textContent = ganador
	body.appendChild(mensaje)
}

function BuscarGanador(e){
	for (let n = 0; n <$cajas.length;n++){
		if($cajas[n].classList.contains("play0") && !(player1.includes($cajas[n]))){
			player1.push($cajas[n])
		}
		if($cajas[n].classList.contains("play1") && !(player2.includes($cajas[n]))){
			player2.push($cajas[n])
		}
	}
		for (let n = 0; n < winCondition.length;n++){
			if(player1.includes(winCondition[n][0]) && player1.includes(winCondition[n][1]) && player1.includes(winCondition[n][2])){
				winCondition[n][0].style.backgroundColor = "green";
				winCondition[n][1].style.backgroundColor = "green";
				winCondition[n][2].style.backgroundColor = "green";
				ganador = "ha ganado jugador 1";
				gano()
				return ganador
			}
			if(player2.includes(winCondition[n][0]) && player2.includes(winCondition[n][1]) && player2.includes(winCondition[n][2])){
				winCondition[n][0].style.backgroundColor = "orange";
				winCondition[n][1].style.backgroundColor = "orange";
				winCondition[n][2].style.backgroundColor = "orange";
				ganador = "ha ganado jugador 2";
				gano()
				return ganador
			}
		}
}

d.addEventListener("click",e=>{
	if (typeof ganador === "string") return;
	if(e.target.classList.contains("play0")){
		return console.log("caja del jugador 1")
	}
	if(e.target.classList.contains("play1")){
		return console.log("caja del jugador 2")
	}

	$cajas.forEach(el=>{
		if(el == e.target){
			el.innerHTML = marca[i%2];
			el.classList.add(`play${i%2}`);
			i++;
		}
	})
	if(ganador == null)BuscarGanador();
	else e.preventDefault();
})

d.addEventListener("click",e=>{
	if(e.target !== reset)  return;
	location.reload()
})
