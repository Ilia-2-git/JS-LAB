let Input = Number(prompt('Enter your number: '))
let star = '*';
for(let i=1;i<=Input;i++){
    let result = "";
    for(let I=1;I<=i;I++){
        result += star;
    }
    console.log(result);
}