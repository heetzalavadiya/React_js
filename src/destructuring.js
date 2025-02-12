// question 1

let user = {name:"alice",age:25,country:"USA"};

let {name,age,country} = user

console.log(name,age,country)


// question 2

const colors = ["red","blue","green"]

const [a,b] = colors

console.log(a,b,colors[2])

// question 3

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const arr = [...arr1,...arr2]

console.log(arr)