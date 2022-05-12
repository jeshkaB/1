// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
const content = document.getElementById("content");
console.log(content);

// -- отримує текст з блоку з id "rules"
const rules = document.getElementById('rules');
console.log(rules);

// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'Еней був парубок моторний';

// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'І хлопець хоть куди козак';

// -- змініть кожному елементу колір фону на червоний
const backgroundRed = document.getElementsByTagName('*');
for (const backgroundRedElement of backgroundRed) {
    backgroundRedElement.style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій
const textColorBlue = document.getElementsByTagName('*');
for (const textColorBlueElement of textColorBlue) {
    textColorBlueElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
const textColorRed = document.getElementsByClassName('fc_rules');
for (let i = 0; i < textColorRed.length; i++) {
    textColorRed[i].style.color = '#b10808';
}