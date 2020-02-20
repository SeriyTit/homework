// запросить у пользователя год рождения


var birth = +prompt('Enter birth date!');
if (birth <= 2001) {
    alert('Welcome!');
} else if (birth >= 2001) {
    alert('Acsess denied!');
} else if (birth >= 2005) {
    alert('Try another resource!!!');
} else if (birth != Number) {
    alert('enter the number!');
} else {
    alert('Welcome!');
}


// опросник для поступления на работу

var age = prompt('Enter your age');
var exp = prompt('Enter youre work expirience');
if (age < 30, exp < 3){
    alert('Unfit!');
} else if(age >= 30, exp > 3){
    alert ('Fit!')
} else {
    console.log('Congrats');
}

// скрипт конвертации валюты

var currency = prompt('Выберите валюту в которую хотите конвертировать(EUR, USD, GBP)');
var amount = prompt('введите сумму в "UAH"');
var EUR = 'EUR',
    USD = 'USD',
    GBP = 'GBP';

if(currency === EUR){    
    var amo = Math.round(amount / 25);
    alert(amo + ' EUR');
    console.log(typeof currency);
} else if (currency === USD){
    var amo = Math.round(amount / 23);
    alert(amo + ' USD'); 
} else if (currency === GBP){
    var amo = Math.round(amount / 27.30);
    alert(amo + ' GBP'); 
} else if(currency != EUR, USD, GBP){
    alert('Неверно введена валюта');
} else {
    console.log('Error');
}