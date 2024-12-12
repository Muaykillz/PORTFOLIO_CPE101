// Function to load JSON data and generate items
async function loadExperiences() {
    try {
        const response = await fetch('./bin/experiences.json');

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Try to parse the response as JSON
        const data = await response.json();

        const expBox = document.getElementById('exp-box');
        const seeMoreButton = document.getElementById('see-more');
        let currentIndex = 0;

        // Determine the limit based on the device width
        const deviceWidth = window.innerWidth;
        const limit = deviceWidth <= 480 ? 4 : deviceWidth <= 768 ? 6 : 9;

        // Function to display items
        function displayItems(startIndex, endIndex) {
            // Clear current items
            expBox.innerHTML = '';

            for (let i = startIndex; i < endIndex; i++) {
                const exp = data[i];
                const item = document.createElement('div');
                item.classList.add('item');

                item.innerHTML = `
                    <div class="content">
                        <h2>${exp.title}</h2>
                        <h4>${exp.award}</h4>
                        <p>${exp.description}</p>
                    </div>
                    <div class="shadow"></div>
                    <div class="black-filter"></div>
                    <img src="${exp.image}" alt="">
                `;
                item.addEventListener('touchstart', function () {
                    item.classList.toggle('active');
                });
                expBox.appendChild(item);
            }
        }

        // Display initial items
        displayItems(0, Math.min(limit, data.length));
        currentIndex = limit;

        // Show the "See More" button if there are more items to display
        if (currentIndex < data.length) {
            seeMoreButton.style.display = 'block';
        }

        seeMoreButton.addEventListener('click', function () {
            if (seeMoreButton.textContent === 'See More') {
                displayItems(0, data.length);
                seeMoreButton.textContent = 'See Less';
            } else {
                displayItems(0, Math.min(limit, data.length));
                seeMoreButton.textContent = 'See More';
            }
        });

    } catch (error) {
        console.error('Error loading experiences:', error);
    }
}

// Call the function to load experiences on page load
document.addEventListener('DOMContentLoaded', loadExperiences);
