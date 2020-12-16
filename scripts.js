function addTask() {
    let task = document.getElementById('task').value;

    if (!task)
    return;

    const text = "<li class='task list-group-item list-group-item-danger mb-1 '>" + task + "</li>"
    document.getElementById('list').insertAdjacentHTML('beforeend', text)
    document.getElementById('task').value = '';
}

document.getElementById('add').addEventListener('click', addTask);
document.getElementById('list').addEventListener('click', function(event){
    const element = event.target;
    element.classList.toggle("done");
});


