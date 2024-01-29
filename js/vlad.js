// 1. отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector('body')
console.log('1.отримай body елемент і виведи його в консоль;', bodyEl)
// 2. отримай елемент id="title" і виведи його в консоль;
const titleIdEl = document.querySelector('#title')
console.log('2. отримай елемент id="title" і виведи його в консоль;', titleIdEl)
// 3. отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector('.list')
console.log('3. отримай елемент class="list" і виведи його в консоль;', listEl)
// 4. отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopicsList = document.querySelectorAll('[data-topic]')
console.log('4. отримай всі елементи з атрибутом data-topic і виведи їх в консоль;', dataTopicsList)
// 5. отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const dataTopicEl = document.querySelector('[data-topic]')
console.log('5. отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;', dataTopicEl)
// 6. отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastElementList = dataTopicsList[dataTopicsList.length-1];
console.log('6. отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;', lastElementList)
// 7. який елемент є сусідом для h1? Знайти і виведи його в консоль;

// 8. по тегу h3 знайти всі заголовки та виведи їх у консоль;
const allH3 = document.querySelectorAll('h3')
for(const header of allH3){
    console.log('всі заголовки',header)
}
console.log('8. по тегу h3 знайти всі заголовки та виведи їх у консоль;', allH3)
// 9. для кожного елмента h3 додай class="active", який змінить колів заголовка на червоний колір
const allH3newClass = document.querySelectorAll('h3')
for(const header of allH3newClass){
    header.classList.add("active");
    header.style.color = 'red'
}  
// 10. знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const findSpecialLi = document.querySelector('li[data-topic="navigation"]')
console.log('10. знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;',findSpecialLi)
// 11. додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
findSpecialLi.dataset.syle = "backgroundColor: yellow;"
// 12. у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13. створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14. додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15. знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16. видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17. після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18. додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19. зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20. очисти список



