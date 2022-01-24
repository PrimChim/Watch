let a = document.getElementById("minu");
let b = document.getElementById("seco");
let c = document.getElementById("milli");
let start = document.getElementById("letstart");
let stops = document.getElementById("letstop");
let reset = document.getElementById("letreset");

let e = 0;
let f = 0;
let g = 0;
let h;
function starts(){
    h = setInterval(startf, 100);

    function startf(){
        e += 1;
        if (e<10){
            c.innerHTML = "0"+e;
        }else{
            c.innerHTML = e;
        }
        if (e>9){
            f +=1;
            if (f<10){
                b.innerHTML = "0"+f;
            }else{
                b.innerHTML = f;
            }
            e = 0;
        }
        if (f>59){
            g +=1;
            if (g<10){
                a.innerHTML = "0"+g;
            }else{
                a.innerHTML = g;
            }
            f = 0;
        }
    }
}

function stopss(){
    clearInterval(h);
}

function resets(){
    clearInterval(h);
    a.innerHTML = "00";
    b.innerHTML = "00";
    c.innerHTML = "00";
    d.innerHTML = "00";
    e = 0;
    f = 0;
    g = 0;
    h = 0;
}

start.addEventListener("click", starts);
reset.addEventListener("click", resets);
stops.addEventListener("click", stopss);