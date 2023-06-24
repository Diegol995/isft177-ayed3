const input = document.getElementById('option');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

btn.addEventListener('click', function() {
    const optionValue = input.value;
    if (optionValue != "") {
        const optionsArray = list.options;
        let find = false;
        if (optionsArray.length == 0) {
            const option = document.createElement('option');
            option.setAttribute('value', optionValue);
            option.innerText = optionValue;
            
            list.appendChild(option);
            input.value = "";
        } else {
            for (let i = 0; i < optionsArray.length; i++) {
                if (optionValue.toUpperCase() == optionsArray[i].value.toUpperCase()) {
                    alert ('El nombre ingresado ya se encuentra en la lista.');
                    find = true;
                    break;
                }
            }
            if (!find) {
                const option = document.createElement('option');
                option.setAttribute('value', optionValue);
                option.innerText = optionValue;
                
                list.appendChild(option);
                input.value = "";
            }
        }
    } else {
        alert ('Por favor ingrese un nombre en el campo de texto.');
    }
})