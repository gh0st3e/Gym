let MenuButton = document.getElementById("activedropmenu");
let MenuView = document.getElementById("dropmenu");
let hideshow = new Boolean(false);

MenuButton.onclick = function(){
    if(hideshow==false)
    {
        MenuView.style.display="block"
        hideshow = true
    }
    else{
        MenuView.style.display="none"
        hideshow = false
    }
}
