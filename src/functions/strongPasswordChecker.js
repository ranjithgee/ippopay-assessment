export default function strongPasswordChecker(password) {
    // Check password length
    let lengthSteps = Math.max(0, 6 - password.length) + Math.max(0, password.length - 20);

    // Check for lowercase, uppercase, and digit
    let lowercase = 1;
    let uppercase = 1;
    let digit = 1;
    for (let i = 0; i < password.length; i++) {
        let char = password.charAt(i);
        if (char.match(/[a-z]/)) {
        lowercase = 0;
        } else if (char.match(/[A-Z]/)) {
        uppercase = 0;
        } else if (char.match(/[0-9]/)) {
        digit = 0;
        }
    }

    let typeSteps = lowercase + uppercase + digit;

    // Check for repeating characters
    let repeatSteps = 0;
    let i = 2;
    while (i < password.length) {
        if (password.charAt(i) === password.charAt(i - 1) && password.charAt(i) === password.charAt(i - 2)) {
        repeatSteps++;
        i += 2;
        } else {
        i++;
        }
    }

    // Check if password is already strong
    if (password.length >= 6 && password.length <= 20 && typeSteps === 0 && repeatSteps === 0) {
        return 0;
    }

    return Math.max(lengthSteps, typeSteps, repeatSteps);
}