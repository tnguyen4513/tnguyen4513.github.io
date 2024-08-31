document.getElementById('switch').addEventListener('change', function() {
    document.body.classList.toggle('light-mode', this.checked);
    document.querySelector('.mode-label').textContent = this.checked ? 'Light Mode' : 'Dark Mode';
});

window.onload = function() {
    var toast = document.getElementById("toast");
    toast.classList.add("show");

    document.getElementById("closeToast").addEventListener("click", function() {
        toast.classList.remove("show");
    });

    // Automatically close the toast after 8 seconds if not closed manually
    setTimeout(function(){
        toast.classList.remove("show");
    }, 8000);
};

