/*
let num = 0;
while(num <= 10){
    console.log(num);
    num++;
}
*/

/*
const Secret = "Hitesh";

let guess = prompt("Enter the Specified Name...");

while(guess != Secret){
    guess = prompt("Enter the Specified Name...");
}

console.log("You got the Name");
*/

let input = prompt("Say Something!!");

while(true){
    input = prompt(input);
    if(input === "Stop!!! copying me"){
        break;
    }
}
console.log("You Win!!");