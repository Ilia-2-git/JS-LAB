let weight = prompt("Enter your weight (kg)");
let height = prompt("Enter your weight (m)");
let BMI = weight / height ** 2;
if (BMI < 18.5) {
  console.log("Underweight:", BMI.toFixed(2));
}
if (18.5 < BMI && BMI<24.9) {
  console.log("Normal weight :", BMI.toFixed(2));
}
if (BMI > 24.9) {
  console.log("Overweight :", BMI.toFixed(2));
}
