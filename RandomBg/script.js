// refer to randomFunction project
function makeRandomNumber(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function changeBg(){
    const num = String(makeRandomNumber(1,8));
    document.body.style.background="url(./images/"+num+".jpg)";
}