// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  //Task 1.0
  const mainEL = document.querySelector("main")
  
  //Task 1.1
  mainEL.style.backgroundColor = 'var(--main-bg)'
  
  //Task 1.2
  let h1 = document.createElement("h1")
  h1.textContent = "SEI Rocks!"
  document.querySelector('main').appendChild(h1)
  // mainElvalue = document.createElement("<h1>SEI Rocks!</h1>")
  
  //Task 1.3
  mainEL.classList.add("flex-ctr")
  
  //Task 2.0
  const topMenuEl = document.querySelector('#top-menu')
  
  //Task 2.1
  topMenuEl.style.height = "100%"
  
  //Task 2.2
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
  
  //Task 2.3
  topMenuEl.classList.add("flex-around")
  
  
  //Task 3.1
  for (let i = 0; i < menuLinks.length; i++) {
    let href = menuLinks[i].href
    const a = document.createElement("a")
    a.setAttribute('href', href)
    a.textContent = menuLinks[i].text
    document.querySelector('nav').appendChild(a)
    console.log(menuLinks[i])
  }
  
  //Task 4.0
  const subMenuEl = document.querySelector("#sub-menu")

  //Task 4.1
  subMenuEl.style.height= "100%";

  //Task 4.2
  subMenuEl.style.backgroundColor= 'var(--sub-menu-bg)'

  //Task 4.3
  subMenuEl.classList.add("flex-around")

  //Task 4.4
  subMenuEl.style.position= "absolute"

  //Task 4.5
  subMenuEl.style.top = 0;

  //Task 5.1
 const topMenuLinks= topMenuEl.querySelectorAll("a")
 let showingSubMenu = "false"

// console.log(topMenuLinks)
function buildSubMenu(evt){
    subMenuEl.innerHTML="";
    const obtained = menuLinks.filter((element)=> {
        return element.text === evt.target.textContent
    })
    console.log(obtained[0].subLinks)
     for (var j = 0 ;j < obtained[0].subLinks.length; j++){
       console.log(obtained[0].subLinks[j].text)
        let newA = document.createElement("a")
        newA.href = obtained[0].subLinks[j].href
        newA.textContent= obtained[0].subLinks[j].text
        subMenuEl.appendChild(newA)
    }

 }
// console.log(subMenuEl.innerHTML)

//Task 5.2
const clicking = topMenuEl.addEventListener("click", function(evt){
evt.preventDefault()
for (let i = 0; i<topMenuLinks.length; i++){
    if(evt.target === topMenuLinks[i]){
        console.log(topMenuLinks[i].text)
        if (topMenuLinks[i].classList.contains("active")){ //Task 5.3
            topMenuLinks[i].classList.remove("active")
           let showingSubMenu ="false";
            subMenuEl.style.top = 0;
            return
        }
        else if(showingSubMenu === true){ //Task 5.7
         
             
            buildSubMenu(evt);
            subMenuEl.style.top = "100%" ;
        }
        else{
            subMenuEl.style.top = 0;
    }
    topMenuLinks[i].classList.remove("active") //Task 5.4
    //  topMenuLinks[i].classList.add("active") //Task 5.5
}}
const clickedElement = evt.target

clickedElement.classList.add("active") //Task 5.5
console.log(clickedElement)


const obtained = menuLinks.filter((element)=> {
    return element.text === clickedElement.textContent
})
console.log(obtained)
if (obtained[0].subLinks){
    console.log(obtained[0].subLinks)  
    showingSubMenu = true;

  }
});
// console.log(menuLinks[0].text)

//Task 6.0
subMenuEl.addEventListener("click", function(evt2){
    evt2.preventDefault();

    for (let i = 0; i<topMenuLinks.length; i++){
    if (evt2.target === subMenuEl || evt2.target ===menuLinks[0].text){
       let showingSubMenu = false;
       subMenuEl.style.top=0;  //Task 6.1
       topMenuLinks[i].classList.remove("active")
       mainEL= subMenuEl.topMenuLinks[i]
       h1.textContent = "<h1>about</h1>"
       console.log("It never makes it here")
   }

      
    
    // if (evt2.target === menuLinks[0].text){
    //     h1.textContent = "<h1>about</h1>"
    //     console.log("It never makes it here")
    //


    
    else{
        return
    }
    console.log(topMenuLinks[i].text)
}})
