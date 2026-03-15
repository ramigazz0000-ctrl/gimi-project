// User Account Management

class UserAccount {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.isLoggedIn = false;
    }

    login(password) {
        if (password === this.password) {
            this.isLoggedIn = true;
            console.log(`${this.username} logged in successfully.`);
        } else {
            console.log(`Invalid password for ${this.username}.`);
        }
    }

    logout() {
        this.isLoggedIn = false;
        console.log(`${this.username} logged out successfully.`);
    }

    resetPassword(newPassword) {
        this.password = newPassword;
        console.log(`Password for ${this.username} has been reset.`);
    }
}

// Example Usage
const user = new UserAccount('johnDoe', 'password123');
user.login('password123');
user.logout();
user.resetPassword('newPassword');