const professions = ["Web Developer", "Student", "Fresher"];
let index = 0;
let letterIndex = 0;

function type() {
    if (letterIndex < professions[index].length) {
        document.querySelector('.profession span').textContent += professions[index].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (letterIndex > 0) {
        document.querySelector('.profession span').textContent = professions[index].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 100);
    } else {
        index = (index + 1) % professions.length;
        setTimeout(type, 150);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 150);
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}, for reaching out! I will get back to you soon.`);
    
    // Reset form
    document.getElementById('contactForm').reset();
});
// skill section 
document.querySelectorAll('.progress-bar').forEach(bar => {
    let value = bar.getAttribute('aria-valuenow');
    bar.style.width = value + '%';
});

document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach((card, index) => {
        // Apply staggered animation delay
        card.style.animationDelay = `${index * 0.2}s`;
        
        // Set progress bar width after loading
        const progressBar = card.querySelector('.progress-bar');
        const skillLevel = progressBar.getAttribute('aria-valuenow');
        setTimeout(() => {
            progressBar.style.width = skillLevel + '%';
        }, index * 200); // Stagger delay for progress bar
    });
});











