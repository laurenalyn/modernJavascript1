// for loop
// const todo = ['homework', 'food', 'project', 'learn js'];

// for(let i = 0; i < todo.length; i++) {
//     console.log(todo[i]);
// }

// forEach
// todo.forEach(function(assignment, index){
//     console.log(`${index} : ${assignment}`)
// });

// map
// const shoppingCart = [
//     {id:1, product: 'book'},
//     {id:2, product: 'shirt'},
//     {id:3, product: 'album'},
// ];
// const productName = shoppingCart.map(function(productName){
//     return productName.product;
// });
// console.log(productName);

// iterators in ES6
// let myCar = {
//     model: 'Camaro',
//     engine: 6.0,
//     year: 1969,
//     make: 'Chevy'
// }

// for(let key in myCar) {
//     console.log(`${key}: ${myCar[key]}`);
// }

// ----------

// WINDOW OBJECT

// confirm
// if(confirm['Are you sure?']) {
//     console.log('Deleted...');
// } else {
//     console.log('Nothing happens');
// }

// retrieve width and height of the window
// let height, width;

// height = window.outerHeight;
// width = window.outerWidth;

// height = window.innerHeight;
// width = window.innerWidth;

// console.log(height);
// console.log(width);

// location
let urlLocation = window.location;

console.log(urlLocation); //gives us the location object
console.log(urlLocation.host); //gives us the host location in the location object 