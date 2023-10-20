let arr = [1,2,3]
let arr2 = [...arr, 4]
//example above is for spread



let catObj = {
    name: 'rose'
}
let catObj2 = {...catObj, age:9, name:'ted'}

//destructuring exmaples below
let {name, age} = catObj2

//using destructing to go into the catObj to look for the key of name or of age and if they exist then it will produce the value of the key
//we are essentially extracting the parameters
//to get the values now you simply enter the name of the key vs catObj2.name or catObj2.age, etc
console.log(name)
console.log(age)

// Can also be done with arrays
let [num1, num2, num3] = arr
console.log(num1)
console.log(num2)
console.log(num3)

let [color1, color2, color3] = ['red', 'blue', 'yellow']
console.log(color1)
console.log(color2)
console.log(color3)
