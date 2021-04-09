const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve,ms));
};
const display_time = (ms,document) => {

    let seconds = Math.floor(ms/1000);
    let miliseconds = ms - seconds*1000;

    document.querySelector('#secondTens').textContent = Math.floor(seconds/10).toString();
    document.querySelector('#secondOnes').textContent = (seconds%10).toString();
    document.querySelector('#msHundreds').textContent = Math.floor(miliseconds/100).toString();
    document.querySelector('#msTens').textContent = (Math.floor(miliseconds%100/10)).toString();
    if(ms === 10000){
        document.querySelectorAll('.digits').forEach(value => value.style.color = 'red');
    }
};
async function timer(target){
    let ms = 0;
    display_time(0,document);
    for(let i = 0; i < 1000; i++){
        if(!(target.disabled)){
            display_time(0,document);
            break;
        }
        await sleep(10);
        ms += 10;
        display_time(ms,document);
    }
    target.disabled = false;
};
let start_button = document.querySelector('#start');
start_button.addEventListener('click',(event)=>{
    event.target.disabled = true;
    timer(event.target);
});
let reset_button = document.querySelector('#reset');
reset_button.addEventListener('click',()=>{
    start_button.disabled = false;
    display_time(0,document);
});