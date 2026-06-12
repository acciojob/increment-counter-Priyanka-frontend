//your JS code here. If required.
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.onclick = function () {
    alert(counter.innerText);
    counter.innerText = Number(counter.innerText) + 1;
};
