window.onload = function () {
  // Selecciono un elemento segun su atributo ID
  const titulo = document.getElementById("titulo");
  // console.log(titulo);

  // Selecciono uno o mas elementos segun su etiqueta
  const h2s = document.getElementsByTagName("h3");
  // console.log(h2s);
  // console.log("La pagina tiene " + h2s.length + " elementos");

  const items_finalizados = document.getElementsByClassName("finalizado");
  // console.log(items_finalizados);

  // Selecciona todos los elementos que cumplan con
  // determinado selector.
  // Items de lista con clase finalizado contenidos en una lista no
  // ordenada con ID tareas
  const items_lista_finalizados = document.querySelectorAll(
    "ul#tareas li.finalizado"
  );
  console.log(items_lista_finalizados);

  // Selecciona el primer elemento que cumpla con el selector
  // indicado
  const item_lista_finalizado = document.querySelector(
    "ul#tareas li.finalizado:nth-child(2)"
  );
  console.log(item_lista_finalizado);
};
