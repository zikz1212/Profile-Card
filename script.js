
const thankYou = document.getElementById("thankYou");

thankYou.addEventListener("click", function () {
    if (thankYou.textContent === "Thank You So Much") {
        thankYou.textContent = "Have a Nice Day!";
    } else {
        thankYou.textContent = "Thank You So Much";
    }
});

thankYou.style.cursor = "pointer";
thankYou.style.transition = "color 0.3s ease";

thankYou.addEventListener("mouseenter", function () {
    thankYou.style.color = "#8ee8f0";
});

thankYou.addEventListener("mouseleave", function () {
    thankYou.style.color = "rgba(255, 255, 255, 0.65)";
});
