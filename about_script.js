let heartbeatSound;
        
function playHeartbeatSound() {
    if (!heartbeatSound) {
        heartbeatSound = new Audio("Heartbeat Sound.mp3");
        heartbeatSound.loop = true; // Loop the sound while hovering
    }
    heartbeatSound.play();
}

function stopHeartbeatSound() {
    if (heartbeatSound) {
        heartbeatSound.pause();
        heartbeatSound.currentTime = 0;
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColors() {
    const letters = document.getElementById('changing-text').innerHTML.split('');
    let coloredText = '';
    letters.forEach(letter => {
        coloredText += `<span style="color: ${getRandomColor()}">${letter}</span>`;
    });
    document.getElementById('changing-text').innerHTML = coloredText;
}

setInterval(changeColors, 2000); // Change colors every 2 seconds
////////////////////////////////////////////////////////////////////////////////////////////////////////


function toggleLanguageOptions() {
    const languageOptions = document.getElementById('language-options');
    languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
}

function updateSelectedLanguageText(language) {
    document.getElementById('current-language').textContent = language;
}
// Get the user's preferred language from storage (localStorage or cookies)
const userLanguage = localStorage.getItem('userLanguage') || 'en';
changeLanguage(userLanguage); // Display content based on user's preferred language

function changeLanguage(language) {
    const contentDivs = document.querySelectorAll('.content');
    
    contentDivs.forEach(div => {
        if (div.id === `content-${language}`) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });

    // Save the user's preferred language to storage
    localStorage.setItem('userLanguage', language);

    document.addEventListener('click', function(event) {
const languageOptions = document.getElementById('language-options');
const selectedLanguage = document.querySelector('.selected-language');

// Check if the clicked element is outside the language selector
if (!languageOptions.contains(event.target) && !selectedLanguage.contains(event.target)) {
languageOptions.style.display = 'none';
}
});

function changeLanguage(language) {
const contentDivs = document.querySelectorAll('.content');
const languageOptions = document.getElementById('language-options');

contentDivs.forEach(div => {
if (div.id === `content-${language}`) {
    div.style.display = 'block';
} else {
    div.style.display = 'none';
}
});

// Save the user's preferred language to storage
localStorage.setItem('userLanguage', language);

// Hide the language options box after a language is selected
languageOptions.style.display = 'none';
}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}


        // Close the sidebar when clicking anywhere on the screen outside the sidebar
        document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////


