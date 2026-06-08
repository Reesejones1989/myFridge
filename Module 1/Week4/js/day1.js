// let titleEl = document.getElementById('title');
// console.log(titleEl)

let p= document.querySelector('p')

let titleEl = document.querySelector("#title")
console.log(p);
console.log(titleEl);

let pe1= document.querySelector('.cool')
console.log(pe1)

// pe1.textContent = 'Comments for <strong> Today </strong>'
pe1.innerHTML = 'Comments for <strong> Today </strong>'

let google = document.getElementById('redirect');
google.setAttribute("href", "https://www.google.com")

for (let commentEl of commentEls){
    commentEl.style.fontSize = "30px"
}