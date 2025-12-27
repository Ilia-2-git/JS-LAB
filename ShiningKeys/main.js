let up = document.querySelector('.arrow-up');
let left = document.querySelector('.arrow-left');
let down = document.querySelector('.arrow-down');
let right = document.querySelector('.arrow-right');
let keys = [up,left,down,right];

function handleShine(event){
    if(event.key == "ArrowUp"){
        up.classList.add('pressed');
    }
    if(event.key == "ArrowLeft"){
        left.classList.add('pressed');
    }
    if(event.key == "ArrowDown"){
        down.classList.add('pressed');
    }
    if(event.key == "ArrowRight"){
        right.classList.add('pressed');
    }
}
function handleKeyUp(event){
    if(event.key == "ArrowUp"){
        up.classList.remove('pressed');
    }
    if(event.key == "ArrowLeft"){
        left.classList.remove('pressed');
    }
    if(event.key == "ArrowDown"){
        down.classList.remove('pressed');
    }
    if(event.key == "ArrowRight"){
        right.classList.remove('pressed');
    }
}

window.addEventListener('keydown',handleShine);
window.addEventListener('keyup',handleKeyUp);
