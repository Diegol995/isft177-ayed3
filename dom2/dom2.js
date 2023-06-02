window.onload = function () {
  // Creamos un elemento HTML (nodo tipo Element)
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");

  const p = document.createElement("p");

  // Configuramos el atributo ID del elemento (forma directa)
  h1.id = "titulo";

  // Configuramos el atributo CLASS del elemento (metodo setAttribute)
  h1.setAttribute("class", "espaciado-doble");

  // Agregamos el elemento HTML al documento HTML
  // const body = document.querySelector("body");
  // body.appendChild(h1);

  // h1.innerText = "<em>Bienvenidos a mi pagina</em>";
  // h1.textContent = "Bienvenidos a mi pagina (textContent)";
  // h1.innerHTML = "<em>Bienvenidos a mi pagina (innerHTML)</em>";

  // Creamos un nodo de texto (nodo tipo Text)
  const h1_texto = document.createTextNode(
    "Bienvenidos a mi pagina (createTextNode)"
  );

  const h2_texto = document.createTextNode("ISFT 177");

  const p_texto = document.createTextNode("Parrafo en el medio");

  h1.appendChild(h1_texto);
  h2.appendChild(h2_texto);
  p.appendChild(p_texto);

  // Selecciona un elemento existente
  const h1_holamundo = document.querySelector("#holamundo");
  console.log(h1_holamundo);
  document.body.insertBefore(p, h1_holamundo);

  // o...

  // (appendChild siempre agrega el elemento al final)
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  // document.body.appendChild(p);

  // Crear una lista no ordenada con 3 items de lista
  const ul = document.createElement("ul");

  const cantidad_items = 3;
  for (let k = 1; k <= cantidad_items; k++) {
    const li = document.createElement("li");
    // const li_texto = document.createTextNode("Item " + k + " de " + cantidad_items);
    const li_texto = document.createTextNode(`Item ${k} de ${cantidad_items}`);
    li.appendChild(li_texto);
    ul.appendChild(li);
  }

  document.body.appendChild(ul);
};
