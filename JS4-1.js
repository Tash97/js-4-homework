//! Content: Functional programming and higher order 
// TODO: Note to students - these questions are experimental & may not all be 
// TODO: possible presently - do to best of ability using tools from lectures

// Reading: Review EJS 5, review other chapters as needed

// HW:
//* 1.  Filter out all of the empty strings from the list below
// Input: 
let placess = [" ","Argentina", " ", "San Diego","","  ","","Boston","New York"]
// Output: ['Argentina', 'San Diego', 'Boston', 'New York']

let filter = placess.filter(place => place.length > 2);
console.log('Question 1:\nThe output of filtering out the empty strings in the provided list is:');
console.log(filter);


//* 2. Write an anonymous function that sorts this list by the last name
// Input: 
let author = ["Joel Carter", "Victor aNisimov", "Andrew P. Garfield","David hassELHOFF","Gary A.J. Bernstein"]
// Output: ['Victor aNisimov', 'Gary A.J. Bernstein', 'Joel Carter', 'Andrew P. Garfield', 'David hassELHOFF']

let map = author.map((list) => {
    let splitter = list.split(" ");
    let reverse = splitter.reverse();
    return reverse;    
})
.sort((a,b) => {
    return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
})
.map((namePiece) => {
    reverseReverse = namePiece.reverse();
    joiner = reverseReverse.join(" ")
    return joiner
    
});
console.log('Question 2:\nThe provided list sorted by last name is as follows:')
console.log(map);

//* 3. Convert the list below from Celsius to Farhenheit, using the map function
// # F = (9/5)*C + 32
// 
let places = [('Nashua',32),("Boston",12),("Los Angelos",44),("Miami",29)]
// Output: [('Nashua', 89.6), ('Boston', 53.6), ('Los Angelos', 111.2), ('Miami', 84.2)]




console.log('Question 3:\nI think question 3 might not be possible?\nWhen I grab an item from the places array it only shows the second item in each parenthesis\nUpon further research, I believe the comma in the parenthesis is working as a comma operator\nAnd is only allowing the last value in each array item to be returned\nThus making it impossible to grab the first item in each parenthesis');


//* 4. Write a recursion function to perform the fibonacci sequence up to the number passed in.
//? You don't need to log out 'iteration 0' etc if you don't want to. 
//? Just log the final values for each iteration
// Output for fib(5) => 
// Iteration 0: 1
// Iteration 1: 1
// Iteration 2: 2
// Iteration 3: 3
// Iteration 4: 5
// Iteration 5: 8
function fib(num){
    let i = 0;
    let num1 = 0;
    let num2 = 1;
    let sum;
    function fibi(num, num1, num2, sum, i) {
        if(i === 0){
            console.log(`iteration ${i}: 1`);
            i++;
            fibi(num, num1, num2, sum, i);
        }else if(i <= num){
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
            i++;
            console.log(`Iteration ${i}: ${sum}`);
            fibi(num, num1, num2, sum, i);
        }
    }
    fibi(num, num1, num2, sum, i);
}
fib(5);
