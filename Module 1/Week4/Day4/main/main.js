const btn = document.querySelector('button');
// const userText = document.querySelector("input")
const list = document.querySelector(".list")
const textInput = document.querySelector("input")

list.addEventListener("click", handleClick);
function handleClick(evt){
    console.log(evt.target)
    evt.target.style.backgroundColor = 'silver'
}

btn.addEventListener("click", function(evt){
    // alert("hello world");
    // alert("input")
    // console.log(evt.target)
    // btn.style.backgroundColor = "blue";
    const li = document.createElement('li')
    const userText = textInput.value;
     li.textContent= userText;
     textInput.value = "";

    // console.log(li);
    // console.log(inp.value)
    document.querySelector('ul').appendChild(li);
});

list.addEventListener("click", () => {
    console.log("UL clicked");
})

