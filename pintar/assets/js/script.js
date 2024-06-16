function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

document.addEventListener("DOMContentLoaded", function () {
  const ele = document.getElementById("ele1");

  pintar(ele);

  ele.addEventListener("click", function () {
    pintar(ele, "yellow"); // no entendi si tiene que ser verde al princio  me perdi en esa parte en el desafio no se explica bien
  });
});
