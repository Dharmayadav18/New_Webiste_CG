const menuItems = document.querySelectorAll('.menu-item');
const categoryLinks = document.querySelectorAll('.menu-categories li');

categoryLinks.forEach(link => {
    link.addEventListener('click', () => {
        const category = link.dataset.category;

        // Remove active class from all links
        categoryLinks.forEach(li => li.classList.remove('active'));

        // Add active class to the clicked link
        link.classList.add('active');

        menuItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) { // Show all or filter
                item.style.display = 'block'; // Or use 'grid' if you want to keep the grid layout
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Optional: Show all items initially
// menuItems.forEach(item => item.style.display = 'block');