let actions = document.querySelector('.actions-container');

let timer;

actions.addEventListener('click', (event) =>{
    let value = event.target.textContent;

    let hourDisplay = document.querySelector('#hour');
    let minDisplay = document.querySelector('#min');
    let secDisplay = document.querySelector('#sec');

    let hour = parseInt(hourDisplay.textContent);
    let min = parseInt(minDisplay.textContent); 
    let sec = parseInt(secDisplay.textContent);

    if(value == 'Play'){
        if(timer==undefined){
        timer = window.setInterval(()=>{
            sec++;
            if(sec == 60){
                min++;
                sec=0;
            }
            if(hour == 60){
                hour++;
                min=0;
            }
        
            hourDisplay.textContent = (hour<10) ? "0"+hour:hour;
            minDisplay.textContent = (min<10) ? "0"+min:min;
            secDisplay.textContent = (sec<10) ? "0"+sec:sec;
        
        },1000);
        }
    }

    if(value == 'Pause'){
        clearInterval(timer);
        timer=undefined;
    }

    if(value == 'Stop'){
        clearInterval(timer);
        timer=undefined;
        minDisplay.textContent = "00";
        secDisplay.textContent = "00";
        msDisplay.textContent = "0000";
    }
})