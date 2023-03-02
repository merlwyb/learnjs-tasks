let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

function printListRecursion(list) {
    console.log(list.value);
    if (list.next === null)
        return;
    printListRecursion(list.next);
}

function printListCycle(list) {
    let lst = list;
    do {
        console.log(lst.value);
        lst = lst.next;
    } while (lst != null);
    return;
}

console.log('Рекурсия')
printListRecursion(list)

console.log('Цикл')
printListCycle(list)


