//COntadores solicitudes
let solicitudesCount = document.querySelector(".solicitudes-count");
let conexionesCount = document.querySelector(".conexiones-count");

//Inicializar valores DOM
let solicitudes = document.querySelectorAll(
  ".connection_request .connection_item"
).length;
let conexiones = document.querySelectorAll(
  ".all_connections .connection_item"
).length;

//Mostrar valores iniciales
solicitudesCount.textContent = solicitudes;
conexionesCount.textContent = conexiones;

//Botones aceptar/rechazar
let aceptarBtns = document.querySelectorAll(".btn_accept");
let rechazarBtns = document.querySelectorAll(".btn_reject");

//Asignacion de eventos.

aceptarBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let item = btn.closest(".connection_item");

    //info del contacto
    let nombre = item.querySelector(".connection_name").textContent;
    let avatar = item.querySelector("img").getAttribute("src");

    //eliminar solicitud
    item.remove();

    //actualiar contadores
    solicitudes--;
    conexiones++;
    document.querySelector(".solicitudes-count").textContent = solicitudes;
    document.querySelector(".conexiones-count").textContent = conexiones;

    //nuevo contacto en conexiones
    let nuevaConexion = document.createElement("div");
    nuevaConexion.classList.add("connection_item");
    nuevaConexion.innerHTML = `
        <div class="connection_info">
        <div class= "connection_avatar">
        <img src= "${avatar}" alt="${nombre}"/>
        </div>
        <span class="connection_name">${nombre}</span>
        </div>
        `;
    document.querySelector(".all_connections").appendChild(nuevaConexion);
  });
});

//eventos para rechazar
rechazarBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let item = btn.closest(".connection_item");
    item.remove();
    solicitudes--;
    document.querySelector(".solicitudes-count").textContent = solicitudes;
  });
});

//editar perfil
// Evento para el botón "Editar Perfil"
let btnEditar = document.querySelector(".edit_profile");
let nombreElemento = document.querySelector(".profile_name");

btnEditar.addEventListener("click", (e) => {
  e.preventDefault(); // prevenir comportamiento por defecto del enlace

  let nuevoNombre = prompt(
    "Ingresa el nuevo nombre:",
    nombreElemento.textContent
  );
  if (nuevoNombre && nuevoNombre.trim() !== "") {
    nombreElemento.textContent = nuevoNombre.trim();
  }
});
