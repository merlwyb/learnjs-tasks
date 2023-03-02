function sumTo1(num) {
    if (num < 2)
        return 1;
    let t = 0;
    for (let i = 1; i <= num; i++) {
        t += i;
    }
    return t;
}

function sumTo2(num) {
    return num < 2 ? 1 : num + sumTo2(num - 1);
}

function sumTo3(num) {
    return num < 2 ? 1 : ((1 + num) * num) / 2;
}

console.log("Цикл")
console.log(sumTo1(1))
console.log(sumTo1(4))
console.log(sumTo1(100))

console.log("Рекурсия")
console.log(sumTo2(1))
console.log(sumTo2(4))
console.log(sumTo2(100))

console.log("Арифметическая прогрессия")
console.log(sumTo3(1))
console.log(sumTo3(4))
console.log(sumTo3(100))


