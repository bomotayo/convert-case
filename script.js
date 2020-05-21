//vars created from button IDs
let container = document.querySelector('.container');
let upperBtn = document.getElementById('upperBtn');
let lowerBtn = document.getElementById('lowerBtn');
let spinalBtn = document.getElementById('spinalBtn');
let snakeBtn = document.getElementById('snakeBtn');
let camelBtn = document.getElementById('camelBtn');
let pascalBtn = document.getElementById('pascalBtn');
let titleBtn = document.getElementById('titleBtn');
let vowelBtn = document.getElementById('vowelBtn');
let consoBtn = document.getElementById('consoBtn');



let clrBtn = document.getElementById('clrBtn');

let text = document.getElementById('conBox');
let regex = /[^a-zA-Z0-9]|\s+/g;
let regexVow = /[aeiou]/g;


// Event Listeners
upperBtn.addEventListener('click', () => {
  text.value = text.value.toUpperCase();
});

lowerBtn.addEventListener('click', () => {
  text.value = text.value.toLowerCase();
});

spinalBtn.addEventListener('click', () => {
  text.value = text.value.replace(/([a-z])([A-Z])/g, "$1 $2");
  text.value = text.value.replace(regex,'-').toLowerCase();
});

snakeBtn.addEventListener('click', () => {
  text.value = text.value.replace(/([a-z])([A-Z])/g, "$1 $2");
  text.value = text.value.replace(regex,'_').toLowerCase();
});

camelBtn.addEventListener('click', () => {
  let arr = text.value.split('');

  for(let i = 0; i < arr.length; i++){
    if(arr[i]===' '){
      arr[i+1] = arr[i+1].toUpperCase();
    }
  }

  text.value = arr.join('').replace(/([a-zA-Z])(\s+)/g,'$1');
});

pascalBtn.addEventListener('click', () => {
  let arr = text.value.split('');
  arr[0] = arr[0].toUpperCase();

  for(let i = 0; i < arr.length; i++){
    if(arr[i]===' '){
      arr[i+1] = arr[i+1].toUpperCase();
    }
  }

  text.value = arr.join('').replace(/([a-zA-Z])(\s+)/g,'$1');
});

titleBtn.addEventListener('click', () => {
  let arr = text.value.split('');
  arr[0] = arr[0].toUpperCase();

  for(let i = 0; i < arr.length; i++){
    if(arr[i]===' '){
      arr[i+1] = arr[i+1].toUpperCase();
    }
  }

  text.value = arr.join('');
});

vowelBtn.addEventListener('click', () => {
  let arr = text.value.split('');

  for(let i = 0; i < arr.length; i++){
    if(regexVow.test(arr[i])){
      arr[i] = arr[i].toUpperCase();
    }
  }

  text.value = arr.join('');
});

consoBtn.addEventListener('click', () => {
  let arr = text.value.split('');

  for(let i = 0; i < arr.length; i++){
    if(!regexVow.test(arr[i])){
      arr[i] = arr[i].toUpperCase();
    }
  }

  text.value = arr.join('');
});

clrBtn.addEventListener('click', () => {
  text.value = '';
});


