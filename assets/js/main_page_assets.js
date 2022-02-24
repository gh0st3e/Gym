let infoblock = document.getElementsByClassName("infoblock");
infoblock[0].style.display="block"
infoblock[1].style.display="block"
infoblock[2].style.display="block"

let infoblocktext1 = document.getElementById("infoblocktext1");
let infoblocktext2 = document.getElementById("infoblocktext2");
let infoblocktext3 = document.getElementById("infoblocktext3");
let infoblocktext4 = document.getElementById("infoblocktext4");


const screenWidth = window.screen.width;




let infomaintext1 = document.getElementById("infomaintext1");
let infomaintext2 = document.getElementById("infomaintext2");
let infomaintext3 = document.getElementById("infomaintext3");


let infoblock0 = new Boolean(false) // Чтобы при отводе мыши с блока не запускалась функция, а только после нажатия
let infoblocktext0 = new Boolean(false) // Чтобы сначала пропадал текст, а потом появлялись блоки
let doubleclickcancel = new Boolean(true);


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


infoblock[0].onclick = function(){
    if(doubleclickcancel==true)
    {
        doubleclickcancel=false;
        let textelemopacity=0;
        let elemopacity=1;
        infomaintext1.style.color="red";
        infoblock0=true;
        let timer = setInterval(function(){
            if(elemopacity<0) 
            {
                if(screenWidth>1000)
                {
                    clearInterval(timer);
                    infoblocktext0=true; // После очистки интервала, появляется возможность появление текста
                    infoblock[1].style.display="none";
                    infoblock[2].style.display="none";
                    infoblock[0].style.position="absolute";
                    infoblock[0].style.left="6.65%";
                    infoblock[0].style.opacity="1";

                    infoblocktext1.style.display="block"

                    infomaintext2.style.display="none";
                    infomaintext3.style.display="none";
                }
                else
                {
                    clearInterval(timer);
                    infoblocktext0=true; // После очистки интервала, появляется возможность появление текста
                    infoblock[1].style.display="none";
                    infoblock[2].style.display="none";
                    infoblock[0].style.position="absolute";
                    infoblock[0].style.left="30%";
                    infoblock[0].style.width="40%"
                    infoblock[0].style.opacity="1";

                    infoblocktext1.style.display="block"
                    
                    infomaintext1.style.opacity="0";
                    infomaintext2.style.display="none";
                    infomaintext3.style.display="none";
                }
                
            }
            if(infoblocktext0==true)
            {
                infoblocktext0=false
                let timertext = setInterval(function(){
                    infoblocktext1.style.opacity=textelemopacity;
                    textelemopacity+=0.1;
                    if(textelemopacity>1) 
                    {
                        clearInterval(timertext);
                    }
                },100)
            }
            infoblock[1].style.opacity=elemopacity;
            infoblock[2].style.opacity=elemopacity;
            infomaintext2.style.opacity=elemopacity;
            infomaintext3.style.opacity=elemopacity;
            elemopacity-=0.1;
        },50)
    }
}

infoblock[0].onmouseout = function(){
    doubleclickcancel=true
    let textelemopacity = 1
    infomaintext1.style.color="white";
    if(infoblocktext0==false && infoblock0==true)
    {
        infoblocktext0=true
        let timertext = setInterval(function(){
            infoblocktext1.style.opacity=textelemopacity;
            textelemopacity-=0.1;
            if(textelemopacity<0) 
            {
                clearInterval(timertext);
                if(infoblock0==true && infoblocktext0==true)
                {
                    let elemopacity=0;   
                    let timer = setInterval(function(){
                        infomaintext2.style.display="block";
                        infomaintext3.style.display="block";
                        infoblock[1].style.display="block"
                        infoblock[2].style.display="block"
                        infoblock[0].style.position="static";
                        infoblock[0].style.opacity="1";
                        if(screenWidth<=1000)
                        {
                            infoblock[0].style.width="50%"
                        }
                        
                        infoblocktext1.style.display="none"
                        if(elemopacity>1)
                        {
                            clearInterval(timer);
                            infoblock0=false;
                        }
                        infoblock[1].style.opacity=elemopacity;
                        infoblock[2].style.opacity=elemopacity;
                        infomaintext1.style.opacity=elemopacity;
                        infomaintext2.style.opacity=elemopacity;
                        infomaintext3.style.opacity=elemopacity;
                        elemopacity+=0.1;
                    },50)
                }
            }
        },50)
    }
} 

infoblock[1].onclick = function(){
    if(doubleclickcancel==true)
    {
        doubleclickcancel=false;
        let elemopacity=1;
        let textelemopacity = 0;
        infomaintext2.style.color="red";
        infoblock0=true;
        let timer = setInterval(function(){
            if(elemopacity<0)
            {
                if(screenWidth >1000)
                {
                    clearInterval(timer);
                    infoblocktext0=true;
                    infoblock[1].style.position="absolute";
                    infoblock[1].style.left="40%"
                    infoblock[0].style.display="none";
                    infoblock[2].style.display="none";
                    infoblock[1].style.opacity="1";
    
                    infomaintext1.style.display="none";
                    
                    infomaintext3.style.display="none";
    
                    infoblocktext2.style.display="block"
                    infoblocktext3.style.display="block"
                }
                else
                {
                    clearInterval(timer);
                infoblocktext0=true;
                infoblock[1].style.position="absolute";
                infoblock[1].style.left="30%"
                infoblock[1].style.width="40%";
                infoblock[0].style.display="none";
                infoblock[2].style.display="none";
                infoblock[1].style.opacity="1";

                infomaintext1.style.display="none";
                infomaintext2.style.opacity="0";
                infomaintext3.style.display="none";

                infoblocktext2.style.display="block"
                infoblocktext3.style.display="block"
                }
                
            }
            if(infoblocktext0==true)
            {
                infoblocktext0=false
                let timertext = setInterval(function(){
                    infoblocktext2.style.opacity=textelemopacity;
                    infoblocktext3.style.opacity=textelemopacity;
                    textelemopacity+=0.1;
                    if(textelemopacity>1) 
                    {
                        clearInterval(timertext);
                    }
                    
                },100)
            }
            infomaintext1.style.opacity=elemopacity;
            infomaintext3.style.opacity=elemopacity;
            infoblock[0].style.opacity=elemopacity;
            infoblock[2].style.opacity=elemopacity;
            elemopacity-=0.1;
        },50)
    }
}

infoblock[1].onmouseout = function(){
    doubleclickcancel=true;
    infomaintext2.style.color="white"
    let textelemopacity = 1
    if(infoblocktext0==false && infoblock0==true)
    {
        infoblocktext0=true
        let timertext = setInterval(function(){
            infoblocktext2.style.opacity=textelemopacity;
            infoblocktext3.style.opacity=textelemopacity;
            textelemopacity-=0.1;
            if(textelemopacity<0) 
            {
                clearInterval(timertext);
                if(infoblock0==true && infoblocktext0==true)
                {
                    let elemopacity=0;
                    let timer = setInterval(function(){
                        infomaintext1.style.display="block";
                        infomaintext3.style.display="block";
                        if(screenWidth<=1000)
                        {
                            infoblock[1].style.width="50%";
                        }
                        
                        infoblock[0].style.display="block"
                        infoblock[2].style.display="block"
                        infoblock[1].style.position="static";
                        infoblock[1].style.opacity="1";

                        infoblocktext2.style.display="none"
                        infoblocktext3.style.display="none"
                        if(elemopacity>1)
                        {
                            clearInterval(timer);
                            infoblock0=false;
                        }
                        infomaintext1.style.opacity=elemopacity;
                        infomaintext2.style.opacity=elemopacity;
                        infomaintext3.style.opacity=elemopacity;
                        infoblock[0].style.opacity=elemopacity;
                        infoblock[2].style.opacity=elemopacity;
                        elemopacity+=0.1;
                    },50)
                }
            }
        },50)
    }
} 

infoblock[2].onclick = function(){
    if(doubleclickcancel==true)
    {
        doubleclickcancel=false
        let elemopacity=1;
        let textelemopacity = 0;
        infomaintext3.style.color="red";
        infoblock0=true;
        let timer = setInterval(function(){
            if(elemopacity<0)
            {
                if(screenWidth>1000)
                {
                    infoblocktext0 = true;
                    clearInterval(timer);
                    infomaintext2.style.display="none";
                    infomaintext1.style.display="none";
    
                    infoblock[2].style.position="absolute";
                    infoblock[2].style.left="73.35%"
                    infoblock[0].style.display="none";
                    infoblock[2].style.opacity="1";
                    infoblock[1].style.display="none";
    
                    infoblocktext4.style.display="block";
                }
                else{
                    infoblocktext0 = true;
                clearInterval(timer);
                infomaintext2.style.display="none";
                infomaintext1.style.display="none";
                infomaintext3.style.opacity="0";
                

                infoblock[2].style.position="absolute";
                infoblock[2].style.left="30%"
                infoblock[2].style.width="40%";
                infoblock[0].style.display="none";
                infoblock[2].style.opacity="1";
                infoblock[1].style.display="none";

                infoblocktext4.style.display="block";
                }
                
            }
            if(infoblocktext0==true)
            {
                infoblocktext0=false
                let timertext = setInterval(function(){
                    infoblocktext4.style.opacity=textelemopacity;
                    textelemopacity+=0.1;
                    if(textelemopacity>1) 
                    {
                        clearInterval(timertext);
                    }
                },100)
            }
            infomaintext1.style.opacity=elemopacity;
            infomaintext2.style.opacity=elemopacity;
            infoblock[0].style.opacity=elemopacity;
            infoblock[1].style.opacity=elemopacity;
            elemopacity-=0.1;
        },50)
    }   
}

infoblock[2].onmouseout = function(){
    doubleclickcancel=true;
    infomaintext3.style.color="white";
    let textelemopacity = 1
    if(infoblocktext0==false && infoblock0==true)
    {
        infoblocktext0=true
        let timertext = setInterval(function(){
            infoblocktext4.style.opacity=textelemopacity;
            textelemopacity-=0.1;
            if(textelemopacity<0) 
            {
                clearInterval(timertext);
                if(infoblock0==true && infoblocktext0==true)
                {
                    let elemopacity=0;   
                    let timer = setInterval(function(){
                        infomaintext2.style.display="block";
                        infomaintext1.style.display="block";

                        infoblock[0].style.display="block"
                        infoblock[1].style.display="block"
                        infoblock[2].style.position="static";
                        infoblock[2].style.opacity="1";
                        if(screenWidth<=1000)
                        {
                            infoblock[2].style.width="50%";
                        }
                        infoblocktext4.style.display="none"
                        if(elemopacity>1)
                        {
                            clearInterval(timer);
                            infoblock0=false;
                        }
                        infomaintext1.style.opacity=elemopacity;
                        infomaintext2.style.opacity=elemopacity;
                        infomaintext3.style.opacity=elemopacity;
                        infoblock[0].style.opacity=elemopacity;
                        infoblock[1].style.opacity=elemopacity;
                        elemopacity+=0.1;
                    },50)
                }
            }
        },50)
    }
} 

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('elements-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let arrofelements = new Array();
let elements = document.querySelectorAll('.elementsforscrolling');


for (let elm of elements) {
  observer.observe(elm);
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }