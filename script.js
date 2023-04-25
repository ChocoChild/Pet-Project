let inputForm = document.querySelector('.inputs__form');
let newInputWrapper = document.querySelector('#div');
let button = document.querySelector('.btn');
const arrayOfTodo = [];
function addInput() {
    let addInput = document.createElement("input");
    addInput.className = 'add__input';
    addInput.value = document.querySelector('input').value;
    addInput.setAttribute('readonly', 'readonly');
    newInputWrapper.append(addInput);
}


function addImage() {
    let garbidge = document.createElement("button");
    garbidge.className = 'button';
    garbidge.innerHTML = '<img class="add__garbidge" src="./img/main/musor.png" alt="musor">'
    newInputWrapper.append(garbidge);    
}

function addImageTwo() {
    let pencil = document.createElement("button");
    pencil.className = 'button-1';
    pencil.innerHTML = '<img class="add__pencil" src="./img/main/pencil.png" alt="musor">'
    newInputWrapper.append(pencil);
}

function addItem(e) {
    e.preventDefault();
    const saves = e.target.input.value;
    const item = {
        saves,
        checked: false,
    }
    arrayOfTodo.push(item);
    renderTodo(arrayOfTodo,newInputWrapper);
    this.reset();
}

function renderTodo(todo, newPost) {
    console.log(todo, newPost);
    newPost.innerHTML = todo.map((todo, index) => {
        return `<div id="div" class="wrapper__add-list">
                    <input class="add__input" readonly="readonly" type="text" value="${todo.saves}">
                    <button class="button-1">
                    <img class="add__pencil" src="./img/main/pencil.png" alt="pencil">
                    </button>
                    <button class="button">
                    <img class="add__garbidge" src="./img/main/musor.png" alt="garbidge" alt="musor">
                    </button>
                </div>`
    })
}


button.addEventListener('click', () => {
    inputForm.addEventListener('submit', addItem);
    addInput();
    addImageTwo();
    addImage();
})


