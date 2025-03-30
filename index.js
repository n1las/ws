
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('titleCanvas');
    const ctx = canvas.getContext('2d');
    const title = document.querySelector('h1');

    // Canvas-Größe an den Titel anpassen
    canvas.width = title.offsetWidth;
    canvas.height = title.offsetHeight;

    // Animationseffekte
    function animateCanvas(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas löschen

        ctx.beginPath();
        ctx.arc(mouseX - canvas.offsetLeft, mouseY - canvas.offsetTop, 30, 0, 2 * Math.PI); // Kreis an der Mausposition
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.stroke();
    }

    // Start der Animation bei Hover
    title.addEventListener('mouseenter', () => {
        canvas.style.display = 'block'; // Canvas anzeigen
        window.addEventListener('mousemove', animateCanvas); // Animation bei Mausbewegung starten
    });

    // Stop der Animation nach dem Verlassen
    title.addEventListener('mouseleave', () => {
        canvas.style.display = 'none'; // Canvas verstecken
        window.removeEventListener('mousemove', animateCanvas); // Animation stoppen
    });
});
