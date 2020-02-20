let arr = [
    'Hello, dude',
    'my name is Serg',
    'how are you?',
];

const body = document.body;
for (let i = 0; i < arr.length; i++) {
   const div = document.createElement('div');
   div.innerHTML = i + 1 + '. ' + arr[i];
   body.appendChild(div);
}