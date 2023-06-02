function addHomeWork(){
    const ul = document.querySelector('.homeWorkList-ul');
    let task = document.getElementById('tasks').value;
    const li = document.createElement('li');

    li.innerText = task;
    ul.appendChild(li);
}