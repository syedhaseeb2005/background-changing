var colors = ["red","aqua","green","blue","brown","pink","yellow","violet","grey"]
var btn = document.querySelector('.button')
var color = document.querySelector('.colorname')

function changebg(){
    return Math.floor(Math.random() * colors.length)
}
btn.addEventListener("click", ()=>{
    let randomnumber = changebg();
    document.body.style.backgroundColor = colors[randomnumber]
    color.textContent = colors[randomnumber]
});



