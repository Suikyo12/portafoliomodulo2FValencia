$(document).ready(function () {
  let $solicitudesCount = $(".solicitudes-count");
  let $conexionesCount = $(".conexiones-count");

  let solicitudes = $(".connection_request .connection_item").length;
  let conexiones = $(".all_connections .connection_item").length;

  $solicitudesCount.text(solicitudes);
  $conexionesCount.text(conexiones);

  $(".btn_accept").on("click", function () {
    let $item = $(this).closest(".connection_item");
    let nombre = $item.find(".connection_name").text();
    let avatar = $item.find("img").attr("src");

    $item.remove();

    solicitudes--;
    conexiones++;
    $solicitudesCount.text(solicitudes);
    $conexionesCount.text(conexiones);

    let nuevaConexion = `
      <div class="connection_item">
        <div class="connection_info">
          <div class="connection_avatar">
            <img src="${avatar}" alt="${nombre}" />
          </div>
          <span class="connection_name">${nombre}</span>
        </div>
      </div>`;

    $(".all_connections").append(nuevaConexion);
  });

  $(".btn_reject").on("click", function () {
    $(this).closest(".connection_item").remove();
    solicitudes--;
    $solicitudesCount.text(solicitudes);
  });

  $(".edit_profile").on("click", function (e) {
    e.preventDefault();
    let nuevoNombre = prompt("Ingresa el nuevo nombre:", $(".profile_name").text());
    if (nuevoNombre && nuevoNombre.trim() !== "") {
      $(".profile_name").text(nuevoNombre.trim());
    }
  });

  // Efectos visuales
  $(".connection_item, .profile_section, .connection_section").hide().fadeIn(800);

  $(".btn_accept, .btn_reject").hover(
    function () {
      $(this).addClass("shadow");
    },
    function () {
      $(this).removeClass("shadow");
    }
  );
});
