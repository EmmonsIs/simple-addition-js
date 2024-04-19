//Isaiah Emmons 4/15/24 //

// Input
const hour1 = parseInt(prompt('Number of Customers From 11am to noon'));
const hour2 = parseInt(prompt('Number of Customers From noon to 1pm'));
const hour3 = parseInt(prompt('Number of Customers From 4pm to 6pm'));
const hour4 = parseInt(prompt('Number of Customers From 5pm to 6pm'));

// process
const total= hour1+hour2+hour3+hour4
const average = total/4

// output
console.log(`Hour 1: ${hour1}`);
console.log(`Hour 2: ${hour2}`);
console.log(`Hour 3: ${hour3}`);
console.log(`Hour 4: ${hour4}`);
console.log(`Total Number of Customers: ${total}`);
console.log(`Average Number of Customers Per Hour: ${average}`);