const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees=((seconds/60)*360)-90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   

    const minutesDegrees=((minutes/60)*360)-90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  

    const hourDegrees=((hour/12)*360)-90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
 


    if(seconds===0)
        secondHand.classList.add('bypass');
    if(seconds===1)
        secondHand.classList.remove("bypass");
}

setInterval(setDate, 1000);