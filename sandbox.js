const scores = [ 10, 20, 60, 40, 70, 90, 30];

const newScores = scores.filter((score)=> {

    // use return true; to keep item inside array
    // use return false; to get rid of each item in array
return score > 20;
});
console.log(newScores)


const users = [
    {name: 'karen', premium: true},
    {name: 'don', premium: false},
    {name: 'larry', premium: true},
    {name: 'emily', premium: false}
]
    // notice how user.premium will automatically return a boolean
const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers)

const prices = [ 10, 30, 15, 25, 50, 40, 5];

const salesprices = prices.map(price => price / 2  + price);

console.log(salesprices)

const products  =[
    {name: 'soap', price: 10},
    {name: 'tissue', price: 30},
    {name: 'paper towels', price: 14},
    {name: 'detergent', price: 50},
    {name: 'pasta', price: 25}
];

const salesProducts = products.map( product => {
    if(product.price > 25) {
        // create a new object
        return {name: product.name , price: product.price / 2};
    }else{
        return product;
    }
});

console.log(salesProducts)

const result2 = scores.reduce((acc, curr) => {
 if(curr > 50){
     acc++;
 }
 return acc;
}, 0);
console.log(result2);


const scores2 =[
    {player: 'Karen', score: 50},
    {player: 'Emily', score: 30},
    {player: 'Karen', score: 70},
    {player: 'Brodie', score: 60},
    {player: 'Karen', score: 50},
    {player: 'Emily', score: 30},
    {player: 'Karen', score: 70},
    {player: 'Brodie', score: 60},
    {player: 'Karen', score: 50},
    {player: 'Emily', score: 30},
    {player: 'Karen', score: 70},
    {player: 'Brodie', score: 60}
];

const results3 = scores2.reduce((acc, curr) => {
    if(curr.player === 'Karen'){
        acc += curr.score;
    }

    return acc;
}, 0)

console.log( results3);

//FIND METHOD

const numbers = [ 10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find(score => score > 50);

console.log(
   `const numbers = [ 10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find(score => score > 50);

ANSWER:
` +
    firstHighScore
    );

    // end of find method

    // SORT METHOD
//sorting strings
const names = ['mario', 'kevin', 'arial', 'karen', 'emily'];

// sorting in alphabetical order
names.sort();
console.log( 
    `const names = ['mario', 'kevin', 'arial', 'karen', 'emily'];
    
    names.sort(); 
    
    ANSWER: ` +
    names)
 
//sorting numbers
const scores3 = [10, 50, 20, 5, 35, 70, 45];
 scores3.sort();

 console.log(scores3)
//sorting objects


const players =[
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
];


players.sort(( a, b) => {
    if(a.score > b.score){
        return -1;
    } else if (b.score > a.score) {
         return 1;
    } else {
        return 0;
    }
 
});

// Chaining Array methods

const products2 = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
];

const filtered= products2
.filter( product => product.price > 20)
.map(product => `the ${product.name} is ${product.price / 2} pounds`);
console.log(filtered)