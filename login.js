// 1. TAB SWITCHING LOGIC
function openLogin() {
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("signupSection").style.display = "none";
    
    document.getElementById("showLoginBtn").classList.add("active-tab");
    document.getElementById("showSignupBtn").classList.remove("active-tab");
}

function openSignup() {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("signupSection").style.display = "block";
    
    document.getElementById("showSignupBtn").classList.add("active-tab");
    document.getElementById("showLoginBtn").classList.remove("active-tab");
}


// 2. FORM SUBMISSION & VALIDATION LOGIC

// Handler function for Login Form Submission
function handleLogin(event) {
    event.preventDefault(); // Stops the page from refreshing automatically
    
    var email = document.getElementById("loginEmail").value;
    var pass = document.getElementById("loginPassword").value;
    
    // Quick baseline verification check
    if (pass.length < 8) {
        alert("Invalid Password. Must be at least 8 characters.");
    } else {
        alert("Welcome Back to Blossom & Bouquet! Login Successful.");
        console.log("Logged in user: " + email);
        
        document.getElementById("loginForm").reset();

        // REDIRECT TO HOME PAGE: Changes page to index.html
        window.location.href = "index.html"; 
    }
}

// Handler function for Signup Form Submission with Strong Password Check
function handleSignup(event) {
    event.preventDefault(); // Stops the page from refreshing automatically
    
    var name = document.getElementById("signupName").value;
    var email = document.getElementById("signupEmail").value;
    var pass = document.getElementById("signupPassword").value;
    var errorLabel = document.getElementById("signupError");
    
    // Clear out any old error highlights from last try
    errorLabel.style.display = "none";
    errorLabel.innerText = "";

    // Rule 1: Check for Length requirement (Minimum 8 Characters)
    if (pass.length < 8) {
        errorLabel.innerText = "❌ Password must be at least 8 characters long.";
        errorLabel.style.display = "block";
        return; // Stops form submission and keeps them on screen
    }

    // Rule 2: Check for an Uppercase Letter (A-Z)
    if (!pass.match(/[A-Z]/)) {
        errorLabel.innerText = "❌ Password must contain at least one uppercase letter (A-Z).";
        errorLabel.style.display = "block";
        return; 
    }

    // Rule 3: Check for a Lowercase Letter (a-z)
    if (!pass.match(/[a-z]/)) {
        errorLabel.innerText = "❌ Password must contain at least one lowercase letter (a-z).";
        errorLabel.style.display = "block";
        return; 
    }

    // Rule 4: Check for a Numerical Digit (0-9)
    if (!pass.match(/[0-9]/)) {
        errorLabel.innerText = "❌ Password must contain at least one number (0-9).";
        errorLabel.style.display = "block";
        return; 
    }

    // Rule 5: Check for a Special Character Symbol (@, #, $, %, etc.)
    if (!pass.match(/[!@#$%^&*()?":{}|<>]/)) {
        errorLabel.innerText = "❌ Password must contain at least one special character (ex: @, #, $, %).";
        errorLabel.style.display = "block";
        return; 
    }

    // SUCCESS CASE: Runs only if password passes all 5 rules perfectly
    alert("Account Successfully Created! Welcome " + name + ".");
    console.log("Registered Email: " + email);
    
    // Reset signup fields and send them to the login section
    document.getElementById("signupForm").reset();
    openLogin();
}
