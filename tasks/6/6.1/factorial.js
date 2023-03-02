function factorial(num) {
    return num < 2 ? 1 : num * factorial(num - 1);
}

console.log(factorial(1)) //1
console.log(factorial(4)) //24
console.log(factorial(5)) //120


