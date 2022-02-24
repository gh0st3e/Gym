let offset = 0;
const sliderLine = document.getElementById("slider-line");

const coachcircle = document.getElementsByClassName("coachcircle")

const namesofcoaches = document.getElementsByClassName("namesofcoaches");

const achievesofcoaches = document.getElementsByClassName("achievesofcoaches");

const desribeofcoach = document.getElementsByClassName("desribeofcoach");

namesofcoaches[0].style.opacity=1;
achievesofcoaches[0].style.opacity=1;
desribeofcoach[0].style.opacity=1;
coachcircle[0].style.backgroundColor="red";

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


document.getElementById("slider-next").addEventListener("click",function(){
    offset= offset + 100;
    
    if(offset==100) 
    {
        coachcircle[1].style.backgroundColor="red";
        coachcircle[0].style.backgroundColor="white";
        coachcircle[2].style.backgroundColor="white";
        namesofcoaches[1].style.opacity=1;
        namesofcoaches[2].style.opacity=0;
        namesofcoaches[0].style.opacity=0;
        achievesofcoaches[1].style.opacity=1;
        achievesofcoaches[2].style.opacity=0;
        achievesofcoaches[0].style.opacity=0;
        desribeofcoach[1].style.opacity=1;
        desribeofcoach[2].style.opacity=0;
        desribeofcoach[0].style.opacity=0;
    }
    if(offset==200) 
    {
        coachcircle[2].style.backgroundColor="red";
        coachcircle[0].style.backgroundColor="white";
        coachcircle[1].style.backgroundColor="white";
        namesofcoaches[2].style.opacity=1;
        namesofcoaches[1].style.opacity=0;
        namesofcoaches[0].style.opacity=0;
        achievesofcoaches[2].style.opacity=1;
        achievesofcoaches[1].style.opacity=0;
        achievesofcoaches[0].style.opacity=0;
        desribeofcoach[2].style.opacity=1;
        desribeofcoach[1].style.opacity=0;
        desribeofcoach[0].style.opacity=0;
    }
    if(offset>200)
    {
        offset=0
        coachcircle[0].style.backgroundColor="red";
        coachcircle[1].style.backgroundColor="white";
        coachcircle[2].style.backgroundColor="white";
        namesofcoaches[0].style.opacity=1;
        namesofcoaches[1].style.opacity=0;
        namesofcoaches[2].style.opacity=0;
        achievesofcoaches[0].style.opacity=1;
        achievesofcoaches[1].style.opacity=0;
        achievesofcoaches[2].style.opacity=0;
        desribeofcoach[0].style.opacity=1;
        desribeofcoach[1].style.opacity=0;
        desribeofcoach[2].style.opacity=0;
    }
    sliderLine.style.left=-offset+"%";

    
    console.log(offset)
})
document.getElementById("slider-prev").addEventListener("click",function(){
    offset= offset - 100;
    if(offset==0) 
    {
        coachcircle[0].style.backgroundColor="red";
        coachcircle[1].style.backgroundColor="white";
        coachcircle[2].style.backgroundColor="white";
        namesofcoaches[0].style.opacity=1;
        namesofcoaches[1].style.opacity=0;
        namesofcoaches[2].style.opacity=0;
        achievesofcoaches[0].style.opacity=1;
        achievesofcoaches[1].style.opacity=0;
        achievesofcoaches[2].style.opacity=0;
        desribeofcoach[0].style.opacity=1;
        desribeofcoach[1].style.opacity=0;
        desribeofcoach[2].style.opacity=0;
    }
    if(offset==100) 
    {
        coachcircle[1].style.backgroundColor="red";
        coachcircle[0].style.backgroundColor="white";
        coachcircle[2].style.backgroundColor="white";
        namesofcoaches[1].style.opacity=1;
        namesofcoaches[2].style.opacity=0;
        namesofcoaches[0].style.opacity=0;
        achievesofcoaches[1].style.opacity=1;
        achievesofcoaches[2].style.opacity=0;
        achievesofcoaches[0].style.opacity=0;
        desribeofcoach[1].style.opacity=1;
        desribeofcoach[2].style.opacity=0;
        desribeofcoach[0].style.opacity=0;
    
    }
    if(offset<0)
    {
        offset=200; 
        coachcircle[2].style.backgroundColor="red";
        coachcircle[0].style.backgroundColor="white";
        coachcircle[1].style.backgroundColor="white";
        namesofcoaches[2].style.opacity=1;
        namesofcoaches[1].style.opacity=0;
        namesofcoaches[0].style.opacity=0;
        achievesofcoaches[2].style.opacity=1;
        achievesofcoaches[1].style.opacity=0;
        achievesofcoaches[0].style.opacity=0;   
        desribeofcoach[1].style.opacity=1;
        desribeofcoach[2].style.opacity=0;
        desribeofcoach[0].style.opacity=0;

    }
    sliderLine.style.left=-offset+"%";
    console.log(offset)
})

function chancecircle()
{
    
}
