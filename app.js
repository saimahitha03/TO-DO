let array = [];
function task() {
    let input = document.getElementById('input').value;
    array.push(input);
    let itemsContainer = document.getElementById('itemsContainer');
    let todoList = document.createElement('div');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    let para = document.createElement('p');
    let del = document.createElement('button');
    del.innerHTML = 'DELETE';
    para.innerHTML = input;
    todoList.classList.add('todo');
    checkBox.classList.add('box');
    del.classList.add('btn1');

    todoList.appendChild(checkBox);
    todoList.appendChild(para);
    todoList.appendChild(del);
    itemsContainer.appendChild(todoList);

    del.addEventListener('click', function() {
        todoList.parentNode.removeChild(todoList);
    });

    let container=document.getElementById('container')
    if(input.length!=0){
        container.classList.remove('d-none')
        container.classList.add('alert-msg')
        setTimeout(()=>{
            container.classList.remove('alert-msg')
            container.classList.add('d-none')     
        },3000)
    }  
    // else{
        // error.innerHTML='Please fill the below field!!'
    //     container.classList.remove('d-none')
    //     container.classList.add('error')
    //     setTimeout(()=>{
    //         container.classList.remove('alert-msg')
    //         container.classList.add('d-none')     
    //     },3000)
    // }
}