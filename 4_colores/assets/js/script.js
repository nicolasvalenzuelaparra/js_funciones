document.addEventListener("DOMContentLoaded", function () {
  // para cambiar el color a negro
  document.getElementById("azul").addEventListener("click", function () {
    this.style.backgroundColor = "black";
  });
  document.getElementById("rojo").addEventListener("click", function () {
    this.style.backgroundColor = "black";
  });
  document.getElementById("verde").addEventListener("click", function () {
    this.style.backgroundColor = "black";
  });
  document.getElementById("amarillo").addEventListener("click", function () {
    this.style.backgroundColor = "black";
  });

  // para cambiar el color y crear
  document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
      document.getElementById("key").style.backgroundColor = "pink";
    } else if (event.key === "s") {
      document.getElementById("key").style.backgroundColor = "orange";
    } else if (event.key === "d") {
      document.getElementById("key").style.backgroundColor = "lightblue";
    } else if (event.key === "q") {
      var newDiv = createColorBox("purple", "Morado");
      document.body.appendChild(newDiv);
    } else if (event.key === "w") {
      var newDiv = createColorBox("gray", "Gris");
      document.body.appendChild(newDiv);
    } else if (event.key === "e") {
      var newDiv = createColorBox("brown", "Café");
      document.body.appendChild(newDiv);
    }
  });

  // funcion para crear
  function createColorBox(color, texto) {
    var newDiv = document.createElement("div");
    newDiv.className = "color-box";
    newDiv.style.backgroundColor = color;
    newDiv.textContent = texto;
    return newDiv;
  }
});
