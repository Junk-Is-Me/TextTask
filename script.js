let text = document.getElementById('text');
let button = document.getElementById('button');

text.addEventListener('click',  function hideText(){
    text.style.display = "none";
});

button.addEventListener('click', function showText(){
    text.style.display = "block";
})

window.addEventListener('keydown', function deleteTheText(event){
    event.preventDefault(0)
    if (event.code === "Space"){
        text.innerHTML = "";
    }
})
