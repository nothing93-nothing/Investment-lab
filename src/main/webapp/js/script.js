// THIS FUNCTION SHOWS THE CURRENT DATE AND TIME IN THE HEADER AND UPDATES IT EVERY SECOND
function updateLiveDateTime() {
    const now = new Date();

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

    document.getElementById('current-date').textContent = formattedDate
    document.getElementById('current-time').textContent = formattedTime
}




// --- EVENT LISTENER ---
document.addEventListener("DOMContentLoaded", () => {


    //INDICES CONVEYOR BELT
    const track = document.getElementById("dynamic-track");
    if (!track) return;

    // 1. Get your initial list of cards
    const originalCards = Array.from(track.children);
    if (originalCards.length === 0) return;

    // 2. We automatically clone the items multiple times
    // to ensure the conveyor belt is way wider than any monitor screen.
    const cloneCount = 4;
    for (let i = 0; i < cloneCount; i++) {
        originalCards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });
    }


    //CURRENT DATE AND TIME
    updateLiveDateTime();
    setInterval(updateLiveDateTime, 1000);


});