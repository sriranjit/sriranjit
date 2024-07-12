let display=document.getElementById("display");
function disp(input){
    display.value += input;
}
function clr(){
    display.value = "";
}
function cal(){
    display.value = eval(display.value);
    display.value=display.value.substring(0,13) 

}
function dele(){
    display.value=display.value.slice(0,-1)
}
