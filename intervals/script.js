// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");
setInterval(Timer ,1000)

function Timer() {
    time += 1
    counterElement.innerText = time
}
