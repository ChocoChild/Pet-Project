let inputForm = document.querySelector('.inputs__form');
let newInputWrapper = document.querySelector('#div');
const arrayOfTodo = JSON.parse(localStorage.getItem('arrayOfTodo')) || [];


function addItem(e) {
    e.preventDefault();
    const saves = e.target.input.value;
    const item = {
        saves,
    }
    arrayOfTodo.push(item);
    localStorage.setItem('arrayOfTodo', JSON.stringify(arrayOfTodo));
    renderTodo(arrayOfTodo, newInputWrapper);
    this.reset();
}

function renderTodo(todo, newPost) {
    newPost.innerHTML = todo.map((todo, index) => {
        return `<div id="div" class="wrapper__add-list">
                    <input class="add__input" readonly="readonly" type="text" value="${todo.saves}">
                    <button class="button-1">
                    <img class="add__pencil" src="./img/main/pencil.png" alt="pencil">
                    </button>
                    <button onclick="removeIndex(${index})" class="button">
                    <img class="add__garbidge" src="./img/main/musor.png" alt="garbidge" alt="musor">
                    </button>
                </div>`
    }).join('');
}

inputForm.addEventListener('submit', addItem);
renderTodo(arrayOfTodo, newInputWrapper);
let editButton = document.querySelector('.button-1');
let removeButton = document.querySelector('.button');

// function removeIndex(index) {
//     let array = arrayOfTodo;
//     array.splice(index, 1);
//     localStorage.setItem('arrayOfTodo', JSON.stringify(arrayOfTodo));
// }

function editItem(index) {
    console.log(index);
}

function removeIndex(index) {
    console.log(index);
    let i = 0;
    let array = arrayOfTodo;
    if (i == index) {
        array.splice(i, 1);
        localStorage.setItem('arrayOfTodo', JSON.stringify(arrayOfTodo));
        console.log(arrayOfTodo);
    } else {
        array.splice(index, 1);
        localStorage.setItem('arrayOfTodo', JSON.stringify(arrayOfTodo));
        console.log(index);
    }
}


