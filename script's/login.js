document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Add basic validation or backend connection here
    if (email === "user@example.com" && password === "password123") {
        alert("Login successful! Welcome back!");
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
          