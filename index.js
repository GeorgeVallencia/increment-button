//document.getElementById('countEl').innerText = 36;

const counter = document.getElementById('countEl');
const plusBtn = document.getElementById('increment-btn');

let count = 0

plusBtn.addEventListener('click', () => {
    if(plusBtn.click){
        counter.innerText = count++;
    }else{
        counter.innerText = count;
    }
});