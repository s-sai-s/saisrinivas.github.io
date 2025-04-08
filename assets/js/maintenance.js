document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.querySelector('.countdown');
    let timeLeft = 30 * 60; // 30 minutes in seconds

    function updateCountdown() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        } else {
            countdownElement.textContent = "00:00";
        }
    }

    updateCountdown();
}); 