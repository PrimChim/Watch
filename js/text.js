let ho = document.getElementById("time");

// let bu = document.getElementById("butto");

let t;
let d;

setInterval(() => {
    let a = new Date();
    d = a.toLocaleDateString();

    let h = a.getHours();
    let am;
    let h1;
    if (h > 12) {
        am = "PM";
        h1 = (h - 12);
    } else {
        am = 'AM';
        h1 = h;
    }

    if (h1<10){
        t = "0"+h1 + " : " + a.getMinutes() + " : " + a.getSeconds() + " " + am;
    }else {
        t = h1 + " : " + a.getMinutes() + " : " + a.getSeconds() + " " + am;
    }

    ho.innerHTML = t + " on " + d;
}, 1)