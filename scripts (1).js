// Toggle menu and button state
document.getElementById('toggleButton').addEventListener('click', function() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('collapsed');
    
    // Change button icon
    const icon = this.querySelector('.material-icons');
    if (leftMenu.classList.contains('collapsed')) {
        icon.textContent = 'menu'; // Change to close icon
    } else {
        icon.textContent = 'close'; // Change back to menu icon
    }
});

// Initialize menu state based on screen size
window.addEventListener('DOMContentLoaded', () => {
    const leftMenu = document.getElementById('leftMenu');
    const toggleButton = document.getElementById('toggleButton');
    
    // Desktop: Show menu by default
    if (window.innerWidth > 768) {
        leftMenu.classList.remove('collapsed');
        toggleButton.querySelector('.material-icons').textContent = 'menu';
    } else {
        leftMenu.classList.add('collapsed');
        toggleButton.querySelector('.material-icons').textContent = 'menu';
    }
});
