
// Validation functions using RegExp
function validateName(name){ return /^[A-Za-z ]+$/.test(name); }
function validateEmail(email){ return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email); }
function validatePhone(phone){ return /^\d{10}$/.test(phone); }
function validatePassword(pass){ 
    return /[A-Z]/.test(pass) && /\d/.test(pass) && /[^A-Za-z0-9]/.test(pass);
}
