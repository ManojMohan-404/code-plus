const courseCards = document.querySelectorAll('.course-card');

// Add event listener to each course card
courseCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'rotateY(0deg) translateZ(50px)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'rotateY(30deg) translateZ(20px)';
    });
});
