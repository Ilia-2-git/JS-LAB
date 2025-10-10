let a = prompt('Enter the first number:')
let b = prompt('Enter the second number:')
let c = prompt('Enter the third number:')
let middle ;//the ourput
if ((a>b && a<c) || (a<b && a>c)){
    middle =a;
}
else if((b>a && b<c) || (b<a && b>c)){
    middle = b;
}
else{
    middle = c;
}
console.log(middle)