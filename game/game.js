//var:
    var trackofmode=6;
    var colors=generateRandomColors(trackofmode)
    var squares = document.getElementsByClassName("square");
    var pickedcolor = pickcolor();
    var colordisplay = document.getElementById("colordisplay");
    var messageDisplay = document.getElementById("message");
    var h1 = document.querySelector("#bh1");
    var resetbtn = document.getElementById("reset");
    var easybtn=document.getElementById("easybtn");
    var hardbtn=document.getElementById("hardbtn");
    
//logic
    //showing the picked color
colordisplay.textContent= pickedcolor
for(var i=0; i < squares.length;i++){
   
    squares[i].style.background = colors[i];
    
    squares[i].addEventListener("click", function(){
       var clickedcolor = this.style.background;
       if(clickedcolor===pickedcolor){
            messageDisplay.textContent="Correct!!";
            changeColors(clickedcolor);
            h1.style.background = clickedcolor;
            resetbtn.textContent="Play Again ??"
            

        }
       else{
           this.style.background="white"; 
           messageDisplay.textContent="try again";
       }
    })
}
    //reset
resetbtn.addEventListener("click",function(){
    colors=generateRandomColors(trackofmode);
    pickedcolor=pickcolor();
    colordisplay.textContent= pickedcolor;
    for(i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
        resetbtn.textContent="New Colors"
        h1.style.background = "#2c3e50"
        messageDisplay.textContent=""
        
    }


});

easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    trackofmode=3;
    colors=generateRandomColors(trackofmode);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i =0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        }else{
            squares[i].style.display="none"
        }
    }

});
hardbtn.addEventListener("click", function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected")
    trackofmode=6;
    colors=generateRandomColors(trackofmode);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    
    for(var i =0;i<squares.length;i++){
        squares[i].style.background=colors[i];
        squares[i].style.display="block"
    }
});

//functions:
    //changing the color
function changeColors(color){
    for(var i=0; i < squares.length;i++){
        squares[i].style.background = color;
        
    }
}
    // picking a random color
function pickcolor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
    console.log(colors[random])
}
    //random num 0-6
function generateRandomColors(num){
    var arr = [];
    for(var i =0 ; i<num ; i++){
        arr.push(randomColor())
    }
    return arr;
}
    // random num 0-255
function randomColor(){
    var r = Math.floor (Math.random()*256);
    var g = Math.floor (Math.random()*256);
    var b = Math.floor (Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}