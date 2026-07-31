// ============================
// happy-final-v2
// created with love ❤️
// ============================

const landing = document.getElementById("landing");
const letterPage = document.getElementById("letterPage");
const openGift = document.getElementById("openGift");
const giftBox = document.getElementById("giftBox");
const bgm = document.getElementById("bgm");
const typingText = document.getElementById("typingText");

// sembunyikan surat saat awal
letterPage.style.display = "none";

// ============================
// buka hadiah
// ============================

openGift.addEventListener("click", () => {

    // animasi kado
    giftBox.style.transform = "scale(1.2) rotate(8deg)";
    giftBox.style.transition = ".5s";

    // putar musik
    bgm.volume = 0.5;

    bgm.play().catch(() => {
        console.log("musik membutuhkan interaksi pengguna");
    });

    // confetti
    if (typeof confetti === "function") {

        confetti({
            particleCount: 200,
            spread: 120,
            origin: {
                y: 0.6
            }
        });

    }

    setTimeout(() => {

        landing.style.display = "none";

        letterPage.style.display = "flex";

        startTyping();

    }, 1200);

});


// ============================
// efek mengetik
// ============================

const fullText = typingText.innerHTML;

typingText.innerHTML = "";

let index = 0;

function startTyping() {

    typingText.innerHTML = "";

    index = 0;

    typing();

}

function typing() {

    if (index < fullText.length) {

        typingText.innerHTML += fullText.charAt(index);

        index++;

        setTimeout(typing, 18);

    }

}


// ============================
// floating hearts
// ============================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-50px";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.opacity = "0.8";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.transition = "transform 6s linear, opacity 6s";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            `translateY(-120vh) rotate(${Math.random()*360}deg)`;

        heart.style.opacity = "0";

    });

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 400);


// ============================
// sparkle kecil
// ============================

function sparkle() {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left = Math.random()*100+"vw";

    star.style.top = Math.random()*100+"vh";

    star.style.fontSize = "18px";

    star.style.opacity = "0";

    star.style.transition = ".8s";

    star.style.pointerEvents = "none";

    document.body.appendChild(star);

    requestAnimationFrame(()=>{

        star.style.opacity="1";

    });

    setTimeout(()=>{

        star.style.opacity="0";

    },600);

    setTimeout(()=>{

        star.remove();

    },1200);

}

setInterval(sparkle,700);


// ============================
// klik foto
// ============================

const photo = document.querySelector(".photo img");

photo.addEventListener("click",()=>{

    photo.style.transform="scale(1.08)";

    setTimeout(()=>{

        photo.style.transform="scale(1)";

    },300);

});


// ============================
// musik selesai
// ============================

bgm.addEventListener("ended",()=>{

    bgm.currentTime = 0;

    bgm.play();

});
