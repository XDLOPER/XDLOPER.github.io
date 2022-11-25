import {myFunc,cubeGenerate,body} from "./main.js";

const button = document.getElementById('button');


setInterval(() => {
    for (let index = 0; index < 1; index++) {
        cubeGenerate();
    }
}, 1);

