function actualizarTotales() {
  const filas = document.querySelectorAll(".cart-row");

  filas.forEach((fila) => {
    const cantidad = parseInt(fila.querySelector(".cart-quantity-input").value);
    const precioUnitario = parseFloat(
      fila
        .querySelector(".cart-price")
        .innerText.replace("$ ", "")
        .replace(",", "")
    );
    const total = cantidad * precioUnitario;

    fila.querySelector(".cart-price").innerText = `$ ${total.toFixed(2)}`;
  });

  const totalCarrito = calcularTotalCarrito();
  document.querySelector(
    ".cart-total-price"
  ).innerText = `$ ${totalCarrito.toFixed(2)}`;
}

const cantidadesInput = document.querySelectorAll(".cart-quantity-input");
cantidadesInput.forEach((input) => {
  input.addEventListener("input", actualizarTotales);
});
