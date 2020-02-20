// Первое задание
var i = 1;
while (i < 10) {
    i++;
    if (i % 2) {
        break;
    }
    console.log(i);
}

var i = 1;
do {
    i++;
} while (i % 2);
console.log(i);

for (var i = 1; i < 10; i++) {
    if (i % 2) {
        break;
    }
    console.log(i);
}
F
//Второе задание
var num = Math.round(Math.random() * 10);

var check = false;
var cont = true;
while (!check && cont) {
    var clientMsg = prompt("Угадайте число от 1 - 10 или напишите 'Нет' если хотите отменить игру");
    if (clientMsg.toLowerCase() === 'нет') {
        cont = false;
    } else {
        if (num === Number(clientMsg)) {
            check = true;
        }
    }
}
alert(check ? 'угадал' : 'Вы не хотите играть');


// Третье задание
var clientNum = Number(prompt('Введите любое число'));
var clN = Number(prompt('Сколько чисел вы хотите вывести?'));
var finded = 0;
for (var i = 1; i < clientNum; i++) {
    if (!(clientNum % i)) {
        console.log(i);
        finded++;
        if (finded === clN) {
            break;
        }
    }
}

