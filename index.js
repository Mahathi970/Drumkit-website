//to select all buttons and apply event Listener  for loop to select all buttons and apply features
/*adding eventlistener to entire web page instead of only one specific place*/

var len = document.querySelectorAll("button.drum").length;
for(var i=0;i<len;i++){
//click
document.querySelectorAll("button")[i].addEventListener("click" , function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});

//keypress
document.addEventListener("keypress",function(event){
    var keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var kick = new Audio("sounds/tom-3.mp3");   
            kick.play();         
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");   
            tom4.play();         
            break; 

        case "j":
            var snare = new Audio("sounds/snare.mp3");   
            snare.play();         
            break; 

           
        case "k":
            var kick = new Audio("sounds/crash.mp3");   
            kick.play();         
            break; 
        
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");   
            kick.play();         
            break; 

        default:
            break;
    }
}

//animation to show if its pressed
function buttonAnimation(currkey){
    var className = "."+currkey;  //class name of buttons
    var activeButton = document.querySelector(className);
    activeButton.classList.add("pressed"); //adding class = pressed to button  

    //to get back to original state after clicking
    //setTimeout(operation,time in ms)
    setTimeout(function(){activeButton.classList.remove("pressed")},200);
}
}

