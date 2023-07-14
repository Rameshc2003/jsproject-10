const btn=document.querySelector('button');
const body=document.querySelector('body');
const color=['pink','blue','black','red','violet','green','yellow']
body.style.backgroundColor='orange';
document.addEventListener("click",function(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex]
})