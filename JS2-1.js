//! Content: Basic Data Structures

// Reading: EJS 5-6
// HW:
//* 1. Number Filter
// Given a list as a parameter,write a function that returns a list of numbers 
//that are less than ten

const numberFilter = (numberSet) => {
    i = 0;
    while(i < numberSet.length){
        if (numberSet[i] >= 10) {
            numberSet.splice(i, 1);
        }else{
            i++;
        }
        }
    console.log(`question 1:\nnumbers in the given list that are less than 10 are:\n${numberSet.toString()}`);
}
 let list = [1,11,14,5,8,9];
numberFilter(list);

// For example: Say your input parameter to the function is [1,11,14,5,8,9]...
// Your output should [1,5,8,9]
// Write a function that takes in two lists and returns the two lists
// merged together and sorted

const listMerger = (listA, listB) => {
    let listC = listA.concat(listB);
    console.log(`Question 1.5:\nthe merged and sorted result of the the given lists is as follows:\n${listC.sort((a, b) => {return a - b; }).toString()}`);

}


let list1 = [5, 11, 20, 42, 0, 6, 9];
let list2 = [5, 6, 7, 8];
listMerger(list1, list2);

//* 2. Build a Shopping Cart
// You can use either lists or dictionaries. The program should have the 
// following capabilities:

// 1) Takes in input
// 2) Stores user input into a dictionary or list
// 3) The User can add or delete items
// 4) The User can see current shopping list
// 5) The program Loops until user 'quits'
// 6) Upon quitting the program, print out all items in the user's list
console.log(`question 2:\nprogram below:`);
class shoppingCart{
    constructor(items = []){
        this.items = items;
    }
    addItem(addItem){
        this.items.push(addItem);
        console.log(`${addItem} added!\nyour list is currently:\n${this.items.join('\n')}`);
    }
    deleteLastItem(){
        let listLength = this.items.length - 1;
        let removedItem = this.items[listLength];
        this.items.pop();
        console.log(`${removedItem} has been removed!\nyour list is currently:\n${this.items.join('\n')}`)


    }
    quit(){
        console.log(`Your completed shopping list is as follows:\n${this.items.join('\n')}`);
    }
}


let myShoppingList = new shoppingCart;


myShoppingList.addItem('banana');
myShoppingList.addItem('apple');
myShoppingList.addItem('pear');
myShoppingList.addItem('grapefruit');
myShoppingList.deleteLastItem();
myShoppingList.deleteLastItem();
myShoppingList.addItem('grapefruit');
myShoppingList.quit();




