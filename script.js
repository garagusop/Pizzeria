let pedido = [];

function agregar(item){
    pedido.push(item);

    let lista = document.getElementById("listaPedido");

    let li = document.createElement("li");
    li.textContent = item;

    lista.appendChild(li);
}

function enviarPedido(){

    let nombre =
        document.getElementById("nombre").value;

    let direccion =
        document.getElementById("direccion").value;

    let mensaje =
        "🍕 NUEVO PEDIDO%0A%0A" +
        "Cliente: " + nombre + "%0A" +
        "Dirección: " + direccion + "%0A%0A" +
        "Pedido:%0A" +
        pedido.join("%0A");

    let telefono =
        "5491123456789";

    let url =
        "https://wa.me/" +
        telefono +
        "?text=" +
        mensaje;

    window.open(url, "_blank");
}
