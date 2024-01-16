const numberOfCategoriesEl = document.querySelectorAll('.item')
console.log(`Number of categories:`, numberOfCategoriesEl.length)
numberOfCategoriesEl.forEach((categoryEl)=> {
    const headerEl = categoryEl.querySelector('h2').textContent
    console.log('Category:' , headerEl)
    console.log('Elements:' , categoryEl.querySelectorAll('li').length)
})