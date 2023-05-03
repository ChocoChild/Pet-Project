const inputForm = document.querySelector('.inputs__form');
const newInputWrapper = document.querySelector('#div');
const arrayOfTodo = JSON.parse(localStorage.getItem('arrayOfTodo')) || [];
let editArrayOfTodo = [];

inputForm.addEventListener('submit', addItem);
renderTodo(arrayOfTodo, newInputWrapper);

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
        return `<div id="div-${index}" class="wrapper__add-list">
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

function removeTodo(index) {;
    arrayOfTodo.splice(index, 1);
    localStorage.setItem('arrayOfTodo', JSON.stringify(arrayOfTodo));

    document.getElementById(`div-${index}`).remove();

    renderTodo(arrayOfTodo, newInputWrapper);
}





// // Добавление часов
// function clock() {
//     let time = document.querySelector('.time');
//     let clock = new Date();
//     let hours = clock.getHours();
//     let minutes = clock.getMinutes();
//     let seconds = clock.getSeconds();
    
//     if(hours < 10) hours = '0' + hours;
//     if(minutes < 10) minutes = '0' + minutes;
//     if(seconds < 10) seconds = '0' + seconds;
    
//     time.textContent = `${hours}:${minutes}:${seconds}`;
// }
// setInterval(clock, 1000);

// // Добавление аудиоплеера
// const player = document.querySelector('.player');
// const prevBtn = document.querySelector('.button-prev');
// const playBtn = document.querySelector('.button-play');
// const pauseBtn = document.querySelector('.button-pause');
// const nextBtn = document.querySelector('.button-next');
// const audio = document.querySelector('.audio');
// const progressContainer = document.querySelector('.progress__container');
// const progress = document.querySelector('.progress');
// const title = document.querySelector('.song__title');

// const songs = ['MiyaGi & Andy Panda - Minor', 'MiyaGi & Andy Panda - Там Ревели Горы', 'Miyagi & Andy Panda - Патрон']

// let songIndex = 0;

// function loadSong(song) {
//     title.innerHTML = song
//     audio.src = `audio/${song}.mp3`;
// }

// loadSong(songs[songIndex]);

// function playSong() {
//     audio.play();
// }

// function pauseSong() {
//     audio.pause();
// }

// playBtn.addEventListener('click', () => {
//     playSong();
// })

// pauseBtn.addEventListener('click', () => {
//     pauseSong();
// })

// function nextSong() {
//     songIndex++
//     if (songIndex > songs.length - 1) {
//         songIndex = 0;
//     }
//     loadSong(songs[songIndex]);
//     playSong();
// }

// nextBtn.addEventListener('click', nextSong);

// function prevSong() {
//     songIndex--;
//     if(songIndex < 0) {
//         songIndex = songs.length - 1;
//     }
//     loadSong(songs[songIndex]);
//     playSong();
// }

// prevBtn.addEventListener('click', prevSong);

// function updateProgress(e) {
//     const {duration, currentTime} = e.srcElement;
//     const progressPercent = (currentTime / duration) * 100;
//     progress.style.width = `${progressPercent}%`;
// }

// audio.addEventListener('timeupdate', updateProgress);


// function setProgress(e) {
//     const width = this.clientWidth;
//     const clickX = e.offsetX;
//     const duration = audio.duration;

//     audio.currentTime = (clickX / width) * duration;
// }

// progressContainer.addEventListener('click', setProgress)