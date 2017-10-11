
var values = [
    (Math.floor(Math.random() * 170) + 30),
    (Math.floor(Math.random() * 170) + 30),
    (Math.floor(Math.random() * 170) + 30)
];

var stage = 0;

var timer = setInterval(()=>{
    if (stage == 0) {
        if (values[2] == 220) {
            stage += 1;
        } else {
            values[2] += 1;
        }
    } else if (stage == 1) {
        if (values[0] == 30) {
            stage += 1;
        } else {
            values[0] -= 1;
        }
    } else if (stage == 2) {
        if (values[1] == 220) {
            stage += 1;
        } else {
            values[1] += 1;
        }
    } else if (stage == 3) {
        if (values[2] == 30) {
            stage += 1;
        } else {
            values[2] -= 1;
        }
    } else if (stage == 4) {
        if (values[0] == 220) {
            stage += 1;
        } else {
            values[0] += 1;
        }
    } else if (stage == 5) {
        if (values[1] == 30) {
            stage += 1;
        } else {
            values[1] -= 1;
        }
    } else {
        stage = 0;
    }
    
    document.getElementById("ASCIIart").style.color = `rgb(${values})`
}, 5);