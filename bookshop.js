function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    document.addEventListener('click', closePopupOutside);
}
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.removeEventListener('click', closePopupOutside);
}
function closePopupOutside(event) {
    const popup = document.getElementById('popup');
    const clickTarget = event.target;
    if (!popup.contains(clickTarget)) {
        closePopup(); // Close the popup if outside of the target window
    }
}