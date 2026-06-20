// THIS FUNCTION SHOWS THE CURRENT DATE AND TIME IN THE HEADER AND UPDATES IT EVERY SECOND
function updateLiveDateTime() {
    const now = new Date();

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

    // Dynamic checks for your IDs
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time') || document.getElementById('live-clock');

    if (dateElement) dateElement.textContent = formattedDate;
    if (timeElement) timeElement.textContent = formattedTime;
}

// --- EVENT LISTENER ---
document.addEventListener("DOMContentLoaded", () => {

    // 1. EXECUTE THE CLOCK LOOP FIRST
    updateLiveDateTime();
    setInterval(updateLiveDateTime, 1000);

    // 2. INDICES CONVEYOR BELT (Safe, non-blocking layout construction)
    const track = document.getElementById("dynamic-track");
    if (track) {
        const originalCards = Array.from(track.children);

        // Use an IF block instead of a return statement so it doesn't break other features
        if (originalCards.length > 0) {
            const cloneCount = 4;
            for (let i = 0; i < cloneCount; i++) {
                originalCards.forEach(card => {
                    const clone = card.cloneNode(true);
                    track.appendChild(clone);
                });
            }
        } else {
            console.warn("Ticker track found, but it has no card children to clone!");
        }
    } else {
        console.error("Could not find an element with id='dynamic-track' in the HTML.");
    }

    //3. PREDICTION FACTORS
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            // 1. Remove active states from all buttons
            tabs.forEach(t => t.classList.remove('active'));
            // 2. Hide all content panels
            panels.forEach(p => p.classList.remove('active'));

            // 3. Set active classes for clicked item
            tab.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

