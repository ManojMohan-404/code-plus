document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you for signing up, ${name}! Confirmation has been sent to ${email}.`);
});
