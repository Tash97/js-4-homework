//! Content: Basic JS - Content: Basic data types, bindings, basic builtins, conditionals, 
//! control flow, loops, switch, functions

//? Comment highlighting: Name: Better Comments
//? VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

// Reading: EJS 1-4 https://eloquentjavascript.net/ 

function answer_beautifier(array, answer){
    let arraycount = array.length;
    for(let t = 0; t < arraycount; t++) {
        if(t <= 1){
            answer += array[t];
        }else if(t === arraycount - 1){
            answer += ", and " + array[t] + ".";
        } else{
            answer += ", " + array[t];
        }
    }
    document.write(answer + "<br>");
    console.log(answer);
}
// HW: 
//* 1. Cube Number Test
// Print out all cubed numbers up to the total value 1000. Meaning that if the cubed number is over 1000 break the loop.
let array1 = ["The cubed numbers whose values are less than 1000 are "];
let answer1 = "Question 1: ";

for(let i = 1; i ** 3 < 1000; i++){
        array1.push(i);
}
answer_beautifier(array1, answer1);




//* 2. Prime Numbers
// Get first prime numbers up to 100
let array2 = ["All prime number up to 100 are "];
let answer2 = "Question 2: ";

for(let i = 1; i <= 100; i++){
    let prime = true;
    for(let t = 2; t < i; t++){
        if(i % t === 0){
            prime = false;
        }
    }
    if(prime === true && i !== 1){
        array2.push(i);
    }
}
answer_beautifier(array2, answer2);



//* 3. Age Question
// Take in a users input for their age, if they are younger than 18 log kids, 
//if they're 18 to 65 log adults, else log seniors

const agecheck = function(age){
    if (age < 18) {
        console.log("kids")
    }
    else if(age <= 65) {
        console.log("adults")
    }
    else {
        console.log("seniors")
    }
}
agecheck(72);