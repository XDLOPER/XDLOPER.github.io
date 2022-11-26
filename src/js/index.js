import * as exp from "./main.js";

const button = document.getElementById('button');

button.addEventListener('click',(e)=>{
    const refreshIntervalId =  setInterval(() => {
            if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
                console.log("stop it")
                clearInterval(refreshIntervalId);
            }else{
                exp.pageScroll(4);
            }
        },1);
});

setInterval(() => {
    for (let index = 0; index < 1; index++) {
        exp.cubeGenerate();
    }
}, 1);

setInterval(() => {
    exp.star.innerHTML = "";
}, 100);