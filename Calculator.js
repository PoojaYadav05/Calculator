const display=document.querySelector("#display");
const buttons=document.querySelectorAll("button")

buttons.forEach((btn)=>{
  btn.addEventListener("click",()=>{
        // Event listener for each button click
    if(btn.id==="="){
       // If the button is the equal sign (=), evaluate and display the result
        display.value=eval(display.value);
    }else if (btn.id==="ac"){
       // If the button is AC (all clear), clear the display
        display.value="";
    }else if(btn.id=="de"){
       // If the button is DE (delete), remove the last character from the display 
        display.value=display.value.slice(0,-1);
    }else{
       // For other buttons, append the button's id to the display
        display.value +=btn.id;
    }
  });
});