const container = document.getElementById('container');
const text = document.getElementById('text');
body = document.querySelector('body');
audio = document.querySelector('audio');

console.log(audio);

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);

function playAudio() {
    audio.play();
}

body.addEventListener('click', playAudio);