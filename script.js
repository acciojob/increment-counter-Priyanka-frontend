//your JS code here. If required.
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
    let currentValue = Number(counter.innerText);

    alert(currentValue); 

    counter.innerText = currentValue + 1;
});
