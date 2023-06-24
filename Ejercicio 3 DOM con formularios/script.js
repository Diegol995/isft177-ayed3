const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    const typeControl = document.getElementById('controlType').value;
    const inputName = document.getElementById('name').value;
    const inputID = document.getElementById('ID').value;
    const inputLabel = document.getElementById('label').value;
    if (inputName != '') {
        if (inputID != '' && inputLabel != '') {
            const input = document.createElement('input');
            const label = document.createElement('label');

            input.setAttribute('type', typeControl);
            input.setAttribute('name', inputName);
            input.setAttribute('id', inputID);
            label.setAttribute('for', inputID);
            label.innerText = inputLabel;

            document.body.appendChild(label);
            document.body.appendChild(input);
        } else if (inputID == '' && inputLabel != '') {
            alert ('No se puede generar una etiqueta si el campo ID está vacío.');
        } else if (inputID != '' && inputLabel == '') {
            const input = document.createElement('input');
            input.setAttribute('name', inputName);
            input.setAttribute('type', typeControl);
            input.setAttribute('id', inputID);
            document.body.appendChild(input);
        }else {
        const input = document.createElement('input');
        input.setAttribute('type', typeControl);
        input.setAttribute('name', inputName);
        document.body.appendChild(input);
    }
    } else {
        alert ('El campo nombre es obligatorio.');
    }
})