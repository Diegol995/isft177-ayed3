window.onload = function () {
    const textBox = document.createElement('textarea');
    const btn = document.createElement('button');

    textBox.setAttribute('id', 'text');

    btn.innerText = 'Enviar';

    document.body.appendChild(textBox);
    document.body.appendChild(btn);
    
    btn.onclick = function () {
        const boxContent = document.querySelector('#text').value;
        alert(boxContent);
    }
}