
const btn = document.getElementById('fullscreen-btn');

btn.addEventListener('click', () => {
    if (document.fullscreenElement) {
        exitFullscreen();
    } else {
        enterFullscreen(document.documentElement);
    }
});

function enterFullscreen(element) {
    element.requestFullscreen?.();
}

function exitFullscreen() {
    document.exitFullscreen?.();
}


const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
document.getElementById("date").innerHTML = date;
document.getElementById("month").innerHTML = months[month];
document.getElementById("year").innerHTML = year;

// Function to update the countdown
function updateCountdown() {
    var now = new Date();
    var targetMidnight = new Date(now);
    targetMidnight.setHours(24, 0, 0, 0); // Set the target time to midnight

    var timeRemaining = targetMidnight - now;

    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Format the time components with leading zeros
    var formattedHours = hours < 10 ? "0" + hours : hours;
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Display the countdown
    document.getElementById("hours").innerHTML = formattedHours ;
    document.getElementById("minutes").innerHTML = formattedMinutes;
    document.getElementById("seconds").innerHTML = formattedSeconds ;

    // Update every second
    setTimeout(updateCountdown, 1000);
}

updateCountdown();