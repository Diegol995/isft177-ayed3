window.onload = function (){
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");
    const div = document.createElement("div");
    const img = document.createElement("img");

    h1.innerText = 'Problema 1';
    h3.innerText = 'Mes de Mayo';
    img.setAttribute('alt', 'JavaScript');
    img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCWBWsa-8imSqy42vkJUNHSvJ84Cuv4x7AJGBeXsfXQ&s');

    document.body.appendChild(h1);
    document.body.appendChild(h3);
    document.body.appendChild(div);
    div.appendChild(img);
}