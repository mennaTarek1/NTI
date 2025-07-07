//question4
/*
4-Write a script that reads from the user his info; validates and displays
// it with a welcoming message.(name,phone,email,)
*/
let name = prompt("Enter your name:").trim();
while (!/^[a-zA-Z\s]{2,50}$/.test(name)) {
    name = prompt("Invalid name. Please enter only letters (no numbers or symbols):").trim();
}

let phone = prompt("Enter your phone number (10 to 15 digits):").trim();
while (!/^\d{10,15}$/.test(phone)) {
    phone = prompt("Invalid phone. Enter a number between 10 to 15 digits:").trim();
}

let email = prompt("Enter your email address:").trim();
while (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    email = prompt("Invalid email format. Please enter a valid email address:").trim();
}

alert(`Hello ${name}!\nYour mobile phone: ${phone}\nYour email: ${email}`);

