let sum = 0;
do{
    input = Number(prompt("Enter your Number | 0 to exit :"))
    sum += input
}while(input != 0);
console.log(sum);