document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    
    // Floating label fix
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.addEventListener("input", function () {
            if (this.value.trim() !== "") {
                this.classList.add("filled");
            } else {
                this.classList.remove("filled");
            }
        });
    });
    
    // Form validation
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;
        
        if (nameInput.value.trim() === "") {
            alert("Please enter your full name.");
            isValid = false;
        }
        
        if (!validateEmail(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            isValid = false;
        }
        
        if (messageInput.value.trim() === "") {
            alert("Please enter your message.");
            isValid = false;
        }
        
        if (isValid) {
            alert("Message sent successfully!");
            form.reset();
        }
    });
});
