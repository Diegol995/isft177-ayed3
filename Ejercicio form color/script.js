window.onload = function () {
    const form = document.createElement('form');
    const color = document.createElement('input');
    const btn = document.createElement('input');

    color.setAttribute('type', 'color');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', 'Cambiar Color');

    document.body.appendChild(form);
    form.appendChild(color);
    form.appendChild(btn);

    btn.onclick = function () {
        document.querySelector('h1').style.color = color.value;
    }
}