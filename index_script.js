        // JavaScript code for the animation
        const animatedLetters = document.querySelectorAll('.animated-letter');

        animatedLetters.forEach((letter, index) => {
            letter.style.animationDelay = `${index * 200}ms`;
        });

        // After the animation completes, show the main content
        const mainContent = document.querySelector('.content');
        const introContainer = document.querySelector('.intro-container');
        const introAnimationDuration = 2000; // Adjust the duration based on your animation time

        setTimeout(() => {
            introContainer.style.display = 'none';
            mainContent.style.display = 'block';
        }, introAnimationDuration);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                // JavaScript code to apply different colors to each word
                const h1Element = document.getElementById('rainbowText');
                const words = h1Element.textContent.trim().split(' ');
                let rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
                let colorIndex = 0;
    
                h1Element.innerHTML = words.map(word => `<span style="color: ${rainbowColors[colorIndex++]}">${word}</span>`).join(' ');
    
                // Reset the colorIndex when it reaches the end of the rainbowColors array
                if (colorIndex >= rainbowColors.length) {
                    colorIndex = 0;
                }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function fetchChannelContent() {
    try {
        const response = await fetch('/api/channel-content'); // Use the correct path to your serverless function
        const data = await response.json();

        const contentElement = document.getElementById('content');
        data.forEach(message => {
            const messageDiv = document.createElement('div');
            messageDiv.innerHTML = `
                <strong>${message.author}</strong> - ${message.content} (${message.timestamp})
            `;
            contentElement.appendChild(messageDiv);
        });
    } catch (error) {
        console.error('Error fetching channel content:', error);
    }
}

fetchChannelContent();