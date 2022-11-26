

const star = document.getElementById("star");
const myFunc = (e)=>{
    alert(e)
}

const randomLocation = (e)=>{
    return Math.floor(Math.random() * e);
}

const cubeCreate = (x,y)=>{
    const element = document.createElement("div");
    element.style.cssText = `width:2px; height:2px; background:#fff; position:absolute; left:${x}%; top:${y}%; border-radius:99px;`;
    star.appendChild(element)
}

const cubeGenerate = ()=>{
    const LocationX = randomLocation(300);
    const LocationY = randomLocation(100);
    cubeCreate(LocationX,LocationY)
}



module.exports = {star,myFunc,cubeCreate,cubeGenerate}