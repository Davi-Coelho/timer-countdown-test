$(document).ready(function () {
    const now = new Date()
    const timeLeft = finalDate - now
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    setTimer(hours, minutes, seconds)
    playTime()
});

let countUpFunction = null
const finalDate = new Date('2022/07/23 20:33').getTime()

const playTime = () => {
    countUpFunction = setInterval(function () {
        const now = new Date().getTime()
        const timeLeft = finalDate - now

        if (timeLeft >= 0) {
            setDigit('secondUnit')
        } else {
            clearInterval(countUpFunction)
        }
    }, 1000);
}

function setDigit(digitClass) {
    $("body").removeClass("play");
    let aa = $(`ul.${digitClass} li.active`);

    if (aa.html() == undefined) {
        aa = $(`ul.${digitClass} li`).eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    } else if (aa.is(":last-child")) {
        switch (digitClass) {
            case 'secondUnit':
                setDigit('secondDecimal')
                break
            case 'secondDecimal':
                setDigit('minuteUnit')
                break
            case 'minuteUnit':
                setDigit('minuteDecimal')
                break
            case 'minuteDecimal':
                setDigit('hourUnit')
                break
            case 'hourUnit':
                setDigit('hourDecimal')
                break
            case 'hourDecimal':
                break
        }
        $(`ul.${digitClass} li`).removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $(`ul.${digitClass} li`).eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    } else {
        $(`ul.${digitClass} li`).removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
}

function setTimer(hours, minutes, seconds) {
    const secondUnitUl = document.querySelector('.secondUnit')
    const secondDecimalUl = document.querySelector('.secondDecimal')
    const minuteUnitUl = document.querySelector('.minuteUnit')
    const minuteDecimalUl = document.querySelector('.minuteDecimal')
    const hourUnitUl = document.querySelector('.hourUnit')
    const hourDecimalUl = document.querySelector('.hourDecimal')

    const secondsUnitBefore = (9 - seconds % 10 - 1) >= 0 ? ((9 - seconds % 10 - 1)) : 9
    const secondsUnitActive = secondsUnitBefore === 9 ? 0 : secondsUnitBefore + 1

    const secondsDecimalBefore = (5 - Math.floor(seconds / 10) - 1) >= 0 ? (5 - Math.floor(seconds / 10) - 1) : 5
    const secondsDecimalActive = secondsDecimalBefore === 5 ? 0 : secondsDecimalBefore + 1
    
    const minutesUnitBefore = (9 - minutes % 10 - 1) >= 0 ? (9 - minutes % 10 - 1) : 9
    const minutesUnitActive = minutesUnitBefore === 9 ? 0 : minutesUnitBefore + 1

    const minutesDecimalBefore = (5 - Math.floor(minutes / 10) - 1) >= 0 ? (5 - Math.floor(minutes / 10) - 1) : 5
    const minutesDecimalActive = minutesDecimalBefore === 5 ? 0 : minutesDecimalBefore + 1

    const hoursUnitBefore = (9 - hours % 10 - 1) >= 0 ? (9 - hours % 10 - 1) : 9
    const hoursUnitActive = hoursUnitBefore === 9 ? 0 : hoursUnitBefore + 1

    const hoursDecimalBefore = (9 - Math.floor(hours / 10) - 1) >= 0 ? (9 - Math.floor(hours / 10) - 1) : 9
    const hoursDecimalActive = hoursDecimalBefore === 9 ? 0 : hoursDecimalBefore + 1

    $(`ul.secondUnit li`).removeClass("before");
    $(`ul.secondDecimal li`).removeClass("before");
    $(`ul.minuteUnit li`).removeClass("before");
    $(`ul.minuteDecimal li`).removeClass("before");
    $(`ul.hourUnit li`).removeClass("before");
    $(`ul.hourDecimal li`).removeClass("before");

    $(`ul.secondUnit li`).removeClass("active");
    $(`ul.secondDecimal li`).removeClass("active");
    $(`ul.minuteUnit li`).removeClass("active");
    $(`ul.minuteDecimal li`).removeClass("active");
    $(`ul.hourUnit li`).removeClass("active");
    $(`ul.hourDecimal li`).removeClass("active");

    secondUnitUl.children[secondsUnitBefore].classList.add('before')
    secondUnitUl.children[secondsUnitActive].classList.add('active')
    secondDecimalUl.children[secondsDecimalBefore].classList.add('before')
    secondDecimalUl.children[secondsDecimalActive].classList.add('active')
    minuteUnitUl.children[minutesUnitBefore].classList.add('before')
    minuteUnitUl.children[minutesUnitActive].classList.add('active')
    minuteDecimalUl.children[minutesDecimalBefore].classList.add('before')
    minuteDecimalUl.children[minutesDecimalActive].classList.add('active')
    hourUnitUl.children[hoursUnitBefore].classList.add('before')
    hourUnitUl.children[hoursUnitActive].classList.add('active')
    hourDecimalUl.children[hoursDecimalBefore].classList.add('before')
    hourDecimalUl.children[hoursDecimalActive].classList.add('active')

    document.querySelector('body').classList.add('play')
}
