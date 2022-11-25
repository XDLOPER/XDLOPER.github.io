const exp = require("./main.js");

const button = document.getElementById('button');


setInterval(() => {
    for (let index = 0; index < 1; index++) {
        exp.cubeGenerate();
    }
}, 1);

