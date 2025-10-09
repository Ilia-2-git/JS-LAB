let Input = Number(prompt('Enter your number: '))
let star = '*';
for(let i=1;i<Input+1;i++){
    let result = "";
    for(let I=1;I<i+1;I++){
        result += star;
    }
    console.log(result);
}