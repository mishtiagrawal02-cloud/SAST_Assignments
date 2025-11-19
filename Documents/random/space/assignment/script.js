
// SAST Rocket Launch Countdown Timer
const launchDate = new Date('2025-12-01T18:00:00');

// Updates the countdown display every second
function updateCountdown() {
    // Get current time
    const now = new Date();
    // Time left in milliseconds
    const diff = launchDate - now;

    if (diff <= 0) {
        
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('launchMsg').style.display = 'block';
        clearInterval(timerInterval); 
    } else {
        // Time calculations
        const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
}


const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
