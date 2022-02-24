let trainingprograms = document.getElementsByClassName("trainingprograms");
let buttonsmenu = document.getElementById("buttonsmenu");
let trainingprogramsimg = document.getElementsByClassName("trainingprogramsimg")
let backtomain = document.getElementById("backtomain");
let trainigprogrammstext1 = document.getElementById("trainigprogrammstext1")
let trainigprogrammstext2 = document.getElementById("trainigprogrammstext2")
let trainigprogrammstext3 = document.getElementById("trainigprogrammstext3")
let muscleimg = document.getElementById("muscleimg");

let doubleclickcancel = new Boolean(true);

buttonsmenu.style.opacity=0;
trainigprogrammstext1.style.opacity=0;
trainigprogrammstext2.style.opacity=0;
trainigprogrammstext3.style.opacity=0;

let buttonsmenuopacity=0;

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



trainingprograms[0].onclick = function(){
    if(doubleclickcancel == true)
    {
        doubleclickcancel = false;
        trainingprograms[0].classList.add("trainingprogramsactive")
        trainingprograms[1].style.display="none";
        trainingprograms[2].style.display="none";
        buttonsmenu.style.display="flex";
        trainingprogramsimg[0].style.height="33%";
        trainigprogrammstext1.style.display="block"

        muscleimg.src="assets/img/Musleschest.png"
    
        let timer = setInterval(() => {
            
            if(buttonsmenu.style.opacity > 1)
            {
                
                clearInterval(timer)
                buttonsmenu.style.display="flex";
                
            }
            console.log(buttonsmenuopacity)
            trainigprogrammstext1.style.opacity=buttonsmenuopacity;
            buttonsmenu.style.opacity=buttonsmenuopacity;
            buttonsmenuopacity+=0.1;
        }, 50);
    }
    backtomain.onclick = function(){
        trainingprograms[0].classList.remove("trainingprogramsactive")
        trainingprograms[1].style.display="block";
        trainingprograms[2].style.display="block";
        buttonsmenu.style.display="none";
        trainingprogramsimg[0].style.height="100%";
        trainigprogrammstext1.style.display="none"
        muscleimg.src="assets/img/Musles.png"
        
        let timer = setInterval(() => {
        
            if(buttonsmenu.style.opacity < 0)
            {
                
                clearInterval(timer)
                buttonsmenu.style.display="none";
                doubleclickcancel=true;
                
            }
            console.log(trainigprogrammstext1.style.opacity)
            buttonsmenu.style.opacity=buttonsmenuopacity;
            trainigprogrammstext1.style.opacity=buttonsmenuopacity;
            buttonsmenuopacity-=0.3;
        }, 50);
    }
}

trainingprograms[1].onclick = function(){
    if(doubleclickcancel == true)
    {
        doubleclickcancel=false;
        trainingprograms[1].classList.add("trainingprogramsactive")
        trainingprograms[0].style.display="none";
        trainingprograms[2].style.display="none";
        buttonsmenuopacity=0;
        trainingprogramsimg[1].style.height="33%";
        trainigprogrammstext2.style.display="block"
        buttonsmenu.style.display="flex";

        muscleimg.src="assets/img/Muslescore.png"

        let timer = setInterval(() => {
            
            if(buttonsmenu.style.opacity>1)
            {
                
                buttonsmenu.style.display="flex";
                clearInterval(timer)
            }
            trainigprogrammstext2.style.opacity=buttonsmenuopacity;
            buttonsmenu.style.opacity=buttonsmenuopacity;
            buttonsmenuopacity+=0.1;
        }, 50);
    }

    backtomain.onclick = function(){
        trainingprograms[1].classList.remove("trainingprogramsactive")
        trainingprograms[0].style.display="block";
        trainingprograms[2].style.display="block";
        buttonsmenu.style.display="none";
        trainingprogramsimg[1].style.height="100%";
        trainigprogrammstext2.style.display="none"
        muscleimg.src="assets/img/Musles.png"

        let timer = setInterval(() => {
        
            if(buttonsmenu.style.opacity < 0)
            {
                
                clearInterval(timer)
                buttonsmenu.style.display="none";
                doubleclickcancel=true;
                
            }
            console.log(buttonsmenuopacity)
            trainigprogrammstext2.style.opacity=buttonsmenuopacity;
            buttonsmenu.style.opacity=buttonsmenuopacity;
            buttonsmenuopacity-=0.3;
        }, 50);
    }
}

trainingprograms[2].onclick = function(){
    if(doubleclickcancel==true)
    {
        doubleclickcancel=false;
        trainingprograms[2].classList.add("trainingprogramsactive")
        trainingprograms[0].style.display="none";
        trainingprograms[1].style.display="none";
        buttonsmenuopacity=0;
        buttonsmenu.style.display="flex";
        trainingprogramsimg[2].style.height="33%";
        trainigprogrammstext3.style.display="block"
        muscleimg.src="assets/img/Muslesfoots.png"

        let timer = setInterval(() => {
            
            if(buttonsmenu.style.opacity>1)
            {
                buttonsmenu.style.display="flex";
                clearInterval(timer)
            }
            trainigprogrammstext3.style.opacity=buttonsmenuopacity;
            buttonsmenu.style.opacity=buttonsmenuopacity;
            buttonsmenuopacity+=0.1;
        }, 50);
    }

    backtomain.onclick = function(){
        trainingprograms[2].classList.remove("trainingprogramsactive")
        trainingprograms[0].style.display="block";
        trainingprograms[1].style.display="block";
        buttonsmenu.style.display="none";
        trainingprogramsimg[2].style.height="100%";
        trainigprogrammstext3.style.display="none"
        muscleimg.src="assets/img/Musles.png"

        let timer = setInterval(() => {
        
            if(buttonsmenu.style.opacity < 0)
            {
                
                clearInterval(timer)
                buttonsmenu.style.display="none";
                doubleclickcancel=true
            }
            console.log(buttonsmenuopacity)
            trainigprogrammstext3.style.opacity=buttonsmenuopacity;
            buttonsmenu.style.opacity=buttonsmenuopacity;
            buttonsmenuopacity-=0.3;
        }, 50);
    }
}