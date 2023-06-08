window.onload = function () {
    const h1 = document.createElement('h1');
    const form = document.createElement('form');
    const label = [document.createElement('label'), document.createElement('label'), document.createElement('label')];
    const input = [document.createElement('input'), document.createElement('input'), document.createElement('input')];
    const selectCity = document.createElement('select');
    const option = [document.createElement('option'), document.createElement('option'), document.createElement('option')];
    const br = [document.createElement('br'), document.createElement('br'), document.createElement('br')];

    h1.innerText = 'Formulario de alta de personas';
    label[0].innerText = 'Nombre y Apellido: ';
    label[1].innerText = 'Edad: ';
    label[2].innerText = 'Ciudad: ';
    option[0].innerText = 'Libertad';
    option[1].innerText = 'Parque San Martín';
    option[2].innerText = 'Merlo Centro';
    

    input[1].setAttribute('type', 'number');
    input[1].setAttribute('min', '18');
    input[2].setAttribute('type', 'submit');
    input[2].setAttribute('value', 'Enviar');
    input[2].setAttribute('id', 'btnEnviar');

    document.body.appendChild(h1);
    document.body.appendChild(form);
    form.appendChild(label[0]);
    form.appendChild(input[0]);
    form.appendChild(br[0]);
    form.appendChild(label[1]);
    form.appendChild(input[1]);
    form.appendChild(br[1]);
    form.appendChild(label[2]);
    form.appendChild(selectCity);
    selectCity.appendChild(option[0]);
    selectCity.appendChild(option[1]);
    selectCity.appendChild(option[2]);
    form.appendChild(br[2]);
    form.appendChild(input[2]);
}