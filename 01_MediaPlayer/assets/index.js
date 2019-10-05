import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video")
const button = document.querySelector("button")
const mute = document.getElementById("muteButton")

const player = new MediaPlayer({el : video, plugins: [new AutoPlay()]});

button.onclick = () => player.togglePlay();
mute.onclick = () => player.mute();
