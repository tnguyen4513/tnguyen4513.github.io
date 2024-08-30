document.getElementById('switch').addEventListener('change', function() {
    document.body.classList.toggle('light-mode', this.checked);
    document.querySelector('.mode-label').textContent = this.checked ? 'Light Mode' : 'Dark Mode';
});