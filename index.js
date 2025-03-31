// Function to create a more refined light blue shine effect on buttons
document.querySelectorAll('.img-btn').forEach(function(buttonWrapper) {
    const button = buttonWrapper.querySelector('.btn');
    const canvas = buttonWrapper.querySelector('.shineCanvas');
    const ctx = canvas.getContext('2d');
    
    let shineStart = 0;
    let shineWidth = 0;
    let animationFrame;  // Store the animation frame for canceling
    const animationSpeed = 0.2; // Slower speed multiplier (lower = slower animation)
    
    // Set the canvas size to match the button size
    canvas.width = button.offsetWidth;
    canvas.height = button.offsetHeight;
    
    // Draw the refined light blue shine effect with a smooth gradient
    function drawShine() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear previous shine
        
        // Create a more complex light blue gradient for the shine effect
        const gradient = ctx.createLinearGradient(shineStart, 0, shineStart + shineWidth, 0);
        gradient.addColorStop(0, 'rgba(173, 216, 230, 0.8)'); // Light blue, soft start
        gradient.addColorStop(0.5, 'rgba(173, 216, 230, 0.4)'); // Fade out in the middle
        gradient.addColorStop(1, 'rgba(173, 216, 230, 0)'); // Transparent end
        
        // Draw the gradient as the shine
        ctx.fillStyle = gradient;
        ctx.fillRect(shineStart, 0, shineWidth, canvas.height);
        
        // Optional: Add a glow effect around the shine (light blue glow)
        ctx.shadowColor = 'rgba(173, 216, 230, 0.6)';
        ctx.shadowBlur = 20;
        ctx.fillStyle = gradient;
        ctx.fillRect(shineStart, 0, shineWidth, canvas.height);
        ctx.shadowBlur = 0; // Reset shadow
    }
    
    // Mouse enter (hover)
    button.addEventListener('mouseenter', function() {
        canvas.style.opacity = 1;  // Show the shine effect
        shineStart = 0;  // Reset the starting position of the shine
        shineWidth = 0;  // Reset the width
        animateShine();  // Start the animation
    });
    
    // Mouse leave
    button.addEventListener('mouseleave', function() {
        canvas.style.opacity = 0;  // Hide the shine effect
        cancelAnimationFrame(animationFrame);  // Stop the animation on mouse leave
    });
    
    // Function to animate the shine across the button
    function animateShine() {
        if (shineWidth < canvas.width) {
            shineWidth += 5 * animationSpeed;  // Slower increase in shine width
            shineStart += 3 * animationSpeed;  // Slower shift of the shine start
            drawShine();
            animationFrame = requestAnimationFrame(animateShine);  // Recursively animate
        } else {
            // Reset shine position and width to create a loop effect
            shineStart = 0;
            shineWidth = 0;
            animationFrame = requestAnimationFrame(animateShine);  // Restart the animation
        }
    }
});
