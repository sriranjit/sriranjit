 //Left Angle
 document.write("Left Angle","<br>")
 for(i=0;i<=5;i++){
     for(j=0;j<=i;j++){
         document.write("*")
     }
 document.write("<br>")
 }
 //Right
 document.write("Right Angle","<br>")
 for(i=0;i<=5;i++){
     for(j=5;j>=i;j--){
         document.write("*")
     }
 document.write("<br>")
 }
 document.write("Pyramid","<br>") 
let string = "";

for (let i = 1; i <= 5; i++) {

for (let j = 5; j > i; j--) {
 string += " ";
}

for (let k = 0; k < i * 2 - 1; k++) {
 string += "*";
}
string += "<br>";
}
document.write(`<pre>${string}</pre>`);
document.write("Square","<br>")
for(i=0;i<=5;i++){
     for(j=0;j<=5;j++){
         document.write("*")
     }
 document.write("<br>")
 }