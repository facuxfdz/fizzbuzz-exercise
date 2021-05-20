// TO READLINE
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

printWithFizz = num => {
    if(isNaN(num))return console.error("\x1b[31m","Arg must be a number")
    if(num<0)return console.error("\x1b[31m","Arg must be positive")
    for(let i=0;i<=num;i++){
        console.log(`${i}: ${fizzbuzz(i)}`)
    }
}

isMultipleOf =  (num,val) => (val % num == 0)

fizzbuzz = num => {
    if(isMultipleOf(3,num) && isMultipleOf(5,num)) return "fizzbuzz"
    if(isMultipleOf(3,num)) return "fizz"
    if(isMultipleOf(5,num)) return "buzz"
    return num;
}



rl.question('Until what number do you want to print? ', (answer) => {
    printWithFizz(answer)
    rl.close();
  });

module.exports = fizzbuzz;
