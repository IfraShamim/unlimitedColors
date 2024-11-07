const changeColor = function randomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.querySelector('body').style.backgroundColor = `rgb(${r},${g},${b})`;
}
let intervalId;
document.querySelector('#start').addEventListener('click',function(){
    intervalId = setInterval(changeColor,1000);
});
document.querySelector('#Stop').addEventListener('click',function(){
    clearInterval(intervalId);
    document.querySelector('body').style.backgroundColor = `#ffffff`; 
});