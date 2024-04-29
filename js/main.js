let btn = document.getElementById("btn");
let myText ="hello from here & welcome to our planet do not forget to enjoy";
 let i = 0;

btn.onclick = function () {
    'use strict' ;
    let f = setInterval(() => {
        
        document.getElementById("text").textContent += myText[i] ;
        i++;
        if (i == myText.length) {
            clearInterval(f);
        }
    }, 100);
}
