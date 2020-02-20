// запросить у пользователя год рождения

var birth = +prompt('Enter birth date!');
var welcome = birth <= 2000;
    denied = birth >= 2001 && birth <=2004,
    another = birth >= 2005,
    takeanumber = birth != Number;//     

// switch\case
switch (true){
    case welcome:
        alert('Welcome!');
        break;
    case denied:
        alert('Acsess denied!');
        break;
    case another:
        alert('Try another resource!');
        break;
    case takeanumber:
        alert('Enter a number');
        break;
    default:
        console.log('Hello!');
        break;    
}

// ternary
var birth = +prompt('Enter birth date!');
var result = (birth <= 2000) ? alert('Welcome') :
    (birth >= 2001 && birth <=2004) ? alert('Denied!') :
    (birth >= 2005) ? alert('Try another res') :
    (birth != Number) ? alert('Enter a number!') : alert('Welcome');


// опросник для поступления на работу

var age = prompt('Enter your age');
var exp = prompt('Enter youre work expirience');
var unfit = (age < 30, exp < 3);
var fit = (age >= 30, exp >= 3);

switch(true){
    case unfit:
        alert('Unfit!');
        break;
    case fit:
        alert('Fit!');
        break;    
}

// ternary
var age = prompt('Enter your age');
var exp = prompt('Enter youre work expirience');

var result = (age < 30, exp < 3) ? alert('Unfit!') :
             (age >= 30, exp >= 3) ? alert('Fit!') : '';


// скрипт конвертации валюты

var currency = prompt('Выберите валюту в которую хотите конвертировать(EUR, USD, GBP)');
var amount = prompt('введите сумму в "UAH"');
var EUR = currency === 'EUR',
    USD = currency === 'USD',
    GBP = currency === 'GBP',
    error = currency !== ('EUR', 'USD', 'GBP');

switch(true){
    case EUR:
        var amo = Math.round(amount / 26);
        alert(amo + ' EUR');
        break;
    case USD:
        var amo = Math.round(amount / 24);
        alert(amo + ' USD');
        break;
    case GBP:
        var amo = Math.round(amount / 28.30);
        alert(amo + ' GBP');
        break; 
    case error:
        alert('Wrong currency');
        break;      
}

// ternary

var currency = prompt('Выберите валюту в которую хотите конвертировать(EUR, USD, GBP)');
var amount = prompt('введите сумму в "UAH"');
var eur = Math.round(amount / 25),
    usd = Math.round(amount / 23),
    gbp = Math.round(amount / 27.30);
var result = (currency === 'EUR') ? eur && alert(eur + ' EUR') :
(currency === 'USD') ? usd && alert(usd + ' USD') :
(currency === 'GBP') ? gbp && alert(gbp + ' GBP') :
(currency !== ('EUR', 'USD', 'GBP')) ? alert('Wrong currency') : '';