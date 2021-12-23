let username = prompt("Indique su nombre")

let Chat = document.querySelector(".chat");

for (var i = 0; i < 5; i += 1) {
    let Mensaje = document.createElement("p");
    Mensaje.className = "msg";
    Mensaje.textContent = `${username}: Mensaje ${i}`
    Chat.appendChild(Mensaje);
}
``
let Reg = document.createElement("p");
Reg.className = "reg";
Chat.appendChild(Reg);
/*

*/
