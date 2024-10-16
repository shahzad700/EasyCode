document.addEventListener("DOMContentLoaded", function () {
    const cartToggle = document.getElementById('cartToggle');
    const cartDropdown = document.getElementById('cartDropdown');

    cartToggle.addEventListener('click', function () {
        cartDropdown.classList.toggle('show');
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('#cartToggle') && !event.target.matches('#cartDropdown')) {
            cartDropdown.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-hover');
    const cartIcon = document.getElementById('shopping-cart-icon'); // Ensure this ID matches your cart icon

    if (!cartIcon) {
        console.error('Cart icon not found. Ensure the ID is correct.');
        return; // Exit if the cart icon is not found
    }

    const cartIconRect = cartIcon.getBoundingClientRect(); // Get the cart icon position

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Create a flying item element
            const flyingItem = document.createElement('img');
            flyingItem.src = 'path/to/your/image/almond.jpg'; // Use a correct relative path or hosted URL
            flyingItem.className = 'flying-cart';
            flyingItem.style.width = '50px'; // Set appropriate width for better visibility
            flyingItem.style.height = '50px'; // Set appropriate height
            document.body.appendChild(flyingItem);

            // Get the button position
            const buttonRect = button.getBoundingClientRect();

            // Set the initial position of the flying item
            flyingItem.style.position = 'absolute';
            flyingItem.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
            flyingItem.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
            flyingItem.style.transition = 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out';
            flyingItem.style.zIndex = 1000; // Ensure it appears above other elements

            // Animate the flying item to the cart icon
            setTimeout(() => {
                const translateX = cartIconRect.left - buttonRect.left - (buttonRect.width / 2) + (cartIconRect.width / 2);
                const translateY = cartIconRect.top - buttonRect.top - (buttonRect.height / 2);
                flyingItem.style.transform = `translate(${translateX}px, ${translateY}px)`;
                flyingItem.style.opacity = '0';
            }, 10); // Allow time for positioning

            // Remove the flying item after the animation ends
            flyingItem.addEventListener('transitionend', () => {
                flyingItem.remove();
            });

            // Add an interaction or notification
            alert('Item added to cart!');
        });
    });
});




// Get all the links in the navigation menu
const links = document.querySelectorAll('nav a');

// Add an event listener to each link
links.forEach(link => {
    link.addEventListener('click', event => {
        // Prevent the default link behavior
        event.preventDefault();

        // Get the href attribute of the link
        const href = link.getAttribute('href');

        // Get the section that corresponds to the link
        const section = document.querySelector(href);

        // Scroll down to the section
        section.scrollIntoView({ behavior: 'smooth' });
    });
});


// for geolocation 
// Geolocation Script
document.addEventListener('DOMContentLoaded', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("user-location").textContent = "Geolocation is not supported by this browser.";
    }
});

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Updating the text with the coordinates (you can customize this further)
    document.getElementById("user-location").textContent = `Lat: ${latitude.toFixed(2)}, Long: ${longitude.toFixed(2)}`;

    // Create a Google Maps link based on the user's location
    const mapLink = document.getElementById("map-link");
    mapLink.href = `https://www.google.com/maps?q=${latitude},${longitude}`;
    mapLink.classList.remove('d-none'); // Show the link
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("user-location").textContent = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("user-location").textContent = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("user-location").textContent = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("user-location").textContent = "An unknown error occurred.";
            break;
    }
}

// JavaScript for fade-in effect when scrolling into view
document.addEventListener('DOMContentLoaded', function() {
    // Get the About Us section elements
    const aboutSection = document.querySelector('.about-us');
    const fadeInElements = aboutSection.querySelectorAll('.fade-in');

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add the visible class when elements are in view
    function handleScroll() {
        fadeInElements.forEach(function(el) {
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    }

    // Listen for scrolling and call handleScroll
    window.addEventListener('scroll', handleScroll);
    
    // Trigger scroll check on load
    handleScroll();
});
