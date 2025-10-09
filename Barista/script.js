console.log("Welcome!");
//variables
let Amount = prompt("How many cups of coffee do you want? ");
let Latte = 100;
let Americano = 80;
let Macha = 120;
let factor = "";
let TotalAmount = 0;
let MachaCounter = 0;
let AmericanoCounter = 0;
let LatteCounter = 0;
// run part -->
for (let i = Amount; i > 0; i--) {
  let Obj = prompt("Enter the type of" + i + ":");
  factor += Obj + "\n";
  if (Obj.toUpperCase() === "LATTE") {
    TotalAmount += 100;
    LatteCounter++
  }
  if (Obj.toUpperCase() === "AMERICANO") {
    TotalAmount += 80;
    AmericanoCounter++
  }
  if (Obj.toUpperCase() === "MACHA") {
    TotalAmount += 120;
    MachaCounter++
  }
}
//   disamounts
if(( MachaCounter+LatteCounter+AmericanoCounter)>3){
    TotalAmount *=0.9;
}
if(LatteCounter > 3){
    console.log("Loyal to Latte! \n 20% off!")
    TotalAmount *=0.8;
}
if(AmericanoCounter > 3){
    console.log("Loyal to Americano! \n 20% off!")
    TotalAmount *=0.8;
}
if(MachaCounter > 3){
    console.log("Loyal to Matcha! \n 20% off!")
    TotalAmount *=0.8;
}
console.log(factor);
console.log(TotalAmount+"$");
