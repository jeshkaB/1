// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
document.getElementById('main_header').classList.add('mar-2022');

// b) робить шириниу елементу ul 400px
const ulWidth400 = document.getElementsByTagName('ul');
for (let i = 0; i < ulWidth400.length; i++) {
    ulWidth400[i].style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
const linkListWidth = document.getElementsByClassName('linkList listElement2');
for (let i = 0; i < linkListWidth.length; i++) {
    linkListWidth[i].style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
const listText =document.getElementsByClassName('listElement2');
for (const listTextElement of listText) {
    console.log(listTextElement.innerText)
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
const liBackgroundGrey = document.getElementsByTagName('li');
for (let i = 0; i < liBackgroundGrey.length; i++) {
    liBackgroundGrey[i].style.background = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
const anchor = document.getElementsByTagName('a');
for (let i = 0; i < anchor.length; i++) {
    anchor[i].classList.add('anhor');
}
console.log(document.getElementsByClassName('anhor'));

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
const aTextSize = document.getElementsByTagName('a');
for (const aTextSizeElement of aTextSize) {
    if (aTextSizeElement.innerText==='link3') {
        aTextSizeElement.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const aTextSizeElement of aTextSize) {
    aTextSizeElement.classList.add(`element_${aTextSizeElement.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const subHeaderBackground = document.getElementsByClassName('sub-header');
for (const subHeaderBackgroundElement of subHeaderBackground) {
    subHeaderBackgroundElement.style.background = `${prompt('change color, please')}`
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту
// = content 2 segment . Колір отримати з prompt()
const subHeaderBackground1 = document.getElementsByClassName('sub-header');
for (const subHeaderBackground1Element of subHeaderBackground1) {
    if (subHeaderBackground1Element.innerText === 'content 2 segment') {
        subHeaderBackground1Element.style.background = `${prompt('change color, please')}`
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
const content1Text = document.getElementsByClassName('content_1');
for (const content1TextElement of content1Text) {
    content1TextElement.innerText = `${prompt('enter text, please')}`;
}

// l) отримати елементи p та змінити їм padding на 20px
const pPadding = document.getElementsByTagName('p');
for (const pPaddingElement of pPadding) {
    pPaddingElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
const textGroup = document.getElementsByClassName('text2');
for (const textGroupElement of textGroup) {
    textGroupElement.innerText = 'mar-2022';
}