window.addEventListener('keydown', function(e){
    console.log(e.keyCode);

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keys = document.querySelector(`.keys[data-key="${e.keyCode}"]`);
    
    if(!audio) return;
    audio.currentTime = 0; //playing all the time after one click
    audio.play();

    keys.classList.add('playing');
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const key = document.querySelectorAll(`.keys`);

key.forEach(keys =>  keys.addEventListener('transitionend', removeTransition));