let header = document.querySelector('header');
let y= 0;
function handleHideHeader(){
    let current = window.pageYOffset;
    if(current>y || current>15*innerHeight){
        header.classList.add('hide');
    }else{
        header.classList.remove('hide');
    }
}
window.addEventListener('scroll',handleHideHeader);
