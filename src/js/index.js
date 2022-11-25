import {myFunc,cubeGenerate,body} from "./main.js";

const button = document.getElementById('button');

button.addEventListener('click',()=>{
    //myFunc("vuhu!")
    console.log("cube oluşuyor..")
    cubeGenerate();
})


setInterval(() => {
    for (let index = 0; index < 1; index++) {
        cubeGenerate();
    }
}, 1);

