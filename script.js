const inputForm = document.querySelector('.inputs__form');
const newInputWrapper = document.querySelector('#div');
const arrayOfTodo = JSON.parse(localStorage.getItem('arrayOfTodo')) || [];
let editArrayOfTodo = [];


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
                    <button onclick="removeTodo(${index})" class="button">
                    <img class="add__garbidge" src="./img/main/musor.png" alt="garbidge" alt="musor">
                    </button>
                </div>`
    }).join('');
}

inputForm.addEventListener('submit', addItem);
renderTodo(arrayOfTodo, newInputWrapper);

function removeTodo(index) {;
    let i = 0;
    let array = arrayOfTodo;
    if (i == index) {
        array.splice(i, 1);
        localStorage.setItem('arrayOfTodo', JSON.stringify(arrayOfTodo));
    } else {
        array.splice(index, 1);
        localStorage.setItem('arrayOfTodo', JSON.stringify(arrayOfTodo));
    }
}

// Добавление часов
function clock() {
    let time = document.querySelector('.time');
    let clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    
    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;
    
    time.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(clock, 1000);

