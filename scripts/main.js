// Toggle Switch
const priceToggle = document.getElementById('checkbox');
let month = true;

priceToggle.addEventListener('click', function() {
    priceToggle.classList.toggle('active');
    if (month) {
        document.getElementById('basic').innerHTML = '<span>&dollar;</span>199.99';
        document.getElementById('professional').innerHTML = '<span>&dollar;</span>249.99';
        document.getElementById('master').innerHTML = '<span>&dollar;</span>399.99';
        month = false;
    } else {
        document.getElementById('basic').innerHTML = '<span>&dollar;</span>19.99';
        document.getElementById('professional').innerHTML = '<span>&dollar;</span>24.99';
        document.getElementById('master').innerHTML = '<span>&dollar;</span>39.99';
        month = true;
    }
});