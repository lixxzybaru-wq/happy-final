// ===============================
// Happy Final v3
// ===============================

const landing = document.getElementById("landing");
const letterPage = document.getElementById("letterPage");

const openGift = document.getElementById("openGift");
const giftBox = document.getElementById("giftBox");

const bgm = document.getElementById("bgm");

const typingText = document.getElementById("typingText");

const playPauseBtn = document.getElementById("playPauseBtn");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

// ===============================
// Isi Surat
// ===============================

const message = `
Happy National Girlfriend Day sayangkuu ❤️

Makasih yaa karena udah hadir di hidup aku.

Makasih udah selalu jadi rumah paling nyaman buat aku.

Aku bersyukur banget bisa kenal sama kamu.

Semoga senyum kamu ga pernah hilang.

Semoga semua mimpi kamu tercapai.

Semoga kita selalu saling jaga.

Aku mungkin belum sempurna.

Tapi aku akan selalu berusaha menjadi yang terbaik buat kamu.

Aku akan selalu berusaha membuat kamu tersenyum setiap hari.

Semoga hubungan kita semakin kuat.

Semoga kita bisa terus bersama.

I Love You So Much ❤️
`;

// ===============================
// Typing Effect
// ===============================

typingText.innerHTML = "";

let index = 0;

function typeLetter(){

    if(index < message.length){

        if(message.charAt(index) === "\n"){

            typingText.innerHTML += "<br>";

        }else{

            typingText.innerHTML += message.charAt(index);

        }

        index++;

        setTimeout(typeLetter,35);

    }

}

// ===============================
// Open Gift
// ===============================

openGift.addEventListener("click",()=>{

    landing.style.display="none";

    letterPage.style.display="flex";

    bgm.play();

    typeLetter();

    if(typeof confetti==="function"){

        confetti({

            particleCount:180,

            spread:120,

            origin:{y:.6}

        });

    }

});

// ===============================
// Music Player
// ===============================

bgm.volume = 0.6;

playPauseBtn.innerHTML = "⏸";

playPauseBtn.addEventListener("click",()=>{

    if(bgm.paused){

        bgm.play();

        playPauseBtn.innerHTML="⏸";

    }else{

        bgm.pause();

        playPauseBtn.innerHTML="▶";

    }

});

// ===============================
// Progress Bar
// ===============================

bgm.addEventListener("loadedmetadata",()=>{

    duration.textContent=formatTime(bgm.duration);

});

bgm.addEventListener("timeupdate",()=>{

    progress.value=(bgm.currentTime/bgm.duration)*100||0;

    currentTime.textContent=formatTime(bgm.currentTime);

});

progress.addEventListener("input",()=>{

    bgm.currentTime=(progress.value/100)*bgm.duration;

});

function formatTime(time){

    if(isNaN(time)) return "00:00";

    const min=Math.floor(time/60);

    const sec=Math.floor(time%60);

    return `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

}

// ===============================
// Previous & Next
// ===============================

document
.getElementById("prevBtn")
.addEventListener("click",()=>{

    bgm.currentTime=0;

});

document
.getElementById("nextBtn")
.addEventListener("click",()=>{

    bgm.currentTime=0;

    bgm.play();

});

// ===============================
// Auto Loop
// ===============================

bgm.loop=true;

// ===============================
// Floating Hearts
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";
    heart.style.transition = "transform 6s linear, opacity 6s linear";
    heart.style.opacity = "1";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(-120vh) rotate(${Math.random()*360}deg)`;
        heart.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(createHeart, 800);

// ===============================
// Sparkle
// ===============================

function sparkle() {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.fontSize = "18px";
    star.style.pointerEvents = "none";
    star.style.opacity = "1";
    star.style.zIndex = "998";

    document.body.appendChild(star);

    setTimeout(() => {

        star.style.transition = "all .8s";

        star.style.opacity = "0";

        star.style.transform = "scale(2)";

    }, 50);

    setTimeout(() => {

        star.remove();

    }, 900);

}

setInterval(sparkle, 1200);

// ===============================
// Music End
// ===============================

bgm.addEventListener("ended", () => {

    playPauseBtn.innerHTML = "▶";

});

// ===============================
// Page Loaded
// ===============================

window.addEventListener("load", () => {

    console.log("Happy Final v3 Loaded ❤️");

});
