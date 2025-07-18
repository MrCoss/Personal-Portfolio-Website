document.addEventListener('DOMContentLoaded', function() {
            
    // --- Back to Top Button Logic ---
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // --- Recommendation Form Logic ---
    const recForm = document.getElementById('rec-form');

    recForm.addEventListener('submit', function(event) {
        // 1. Prevent the default form submission behavior (which reloads the page)
        event.preventDefault();

        // 2. Get the user's input from the textarea and name field
        const recommendationInput = document.getElementById('recommendation-text');
        const message = recommendationInput.value.trim();
        const nameInput = document.getElementById('name');
        const name = nameInput.value.trim();

        // 3. If the message is empty, show an alert and stop
        if (message === '') {
            alert('Please enter a recommendation before submitting.');
            return;
        }

        // 4. Find the grid where recommendations are displayed
        const recommendationsGrid = document.querySelector('#recommendations .recommendations-grid');

        // 5. Create the new recommendation card elements
        const newCard = document.createElement('div');
        newCard.classList.add('card', 'rec-card');

        const newParagraph = document.createElement('p');
        // Safely insert the user's text to prevent HTML injection
        newParagraph.textContent = `"${message}"`;

        // 6. Assemble the new card and add it to the grid
        newCard.appendChild(newParagraph);
        recommendationsGrid.appendChild(newCard);

        // 7. Clear the form fields for the next entry
        recommendationInput.value = '';
        nameInput.value = '';

        // 8. Give the user feedback
        alert('Thank you for your recommendation!');
    });
});