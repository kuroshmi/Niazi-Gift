const startPage =
    document.getElementById("startPage");

const scenePage =
    document.getElementById("scenePage");

const letterPage =
    document.getElementById("letterPage");

const finalPage =
    document.getElementById("finalPage");


const startButton =
    document.getElementById("startButton");

const continueButton =
    document.getElementById("continueButton");


const music =
    document.getElementById("music");


/* ================= تغییر صفحه ================= */

function changePage(current, next) {

    current.classList.remove("active");

    setTimeout(function () {

        next.classList.add("active");

    }, 500);
}


/* ================= شروع ================= */

startButton.addEventListener(
    "click",
    function () {

        /*
        چون کاربر روی دکمه کلیک کرده،
        مرورگر اجازه پخش موسیقی را می دهد.
        */

        music.volume = 0.7;

        music.play().catch(function (error) {

            console.log(
                "Music could not start:",
                error
            );

        });


        /* رفتن به صحنه */

        changePage(
            startPage,
            scenePage
        );


        /*
        بعد از 7.5 ثانیه
        صحنه به نامه می رود.
        */

        setTimeout(function () {

            changePage(
                scenePage,
                letterPage
            );

        }, 7500);

    }
);


/* ================= ادامه ================= */

continueButton.addEventListener(
    "click",
    function () {

        changePage(
            letterPage,
            finalPage
        );

    }
);