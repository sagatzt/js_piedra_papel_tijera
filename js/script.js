
let modal = document.querySelector(".modal")

document.getElementById("btnComenzar").onclick=()=>{
    let jugador1=document.getElementById("jugador1").value
    document.querySelector(".saludo-p1").textContent="Partida de " + jugador1
    modal.classList.add("modal-hidden")
}

document.getElementById("btnJugar").onclick=()=>{
    cambio=0
    repite=setInterval(random,50)
}

document.getElementById("jugada-p1").onchange=(e)=>{
    document.querySelector(".img-jugada").src="../images/" + e.target.value + ".png"
}

let repite,cambio,jugada2
let images=["piedra","papel","tijera"]
function random(){
    let r=Math.round(Math.random()*2)
    document.querySelector("#jugada-p2").src="../images/" + images[r] + ".png"
    cambio++
    if(cambio==42) {
        clearInterval(repite)
        jugada2=images[r]
        comprobar()
    }
}

function comprobar(){
    let jugada1=document.querySelector("#jugada-p1").value
    console.log("j1: " + jugada1)
    console.log("j2: " + jugada2)
}