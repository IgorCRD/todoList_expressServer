import bcrypt from 'bcrypt';

class Crypto {
    static cryptPassword(plainPassword, salt) {
        // Makes sure we have a 10 characters long salt
        const salty = salt || bcrypt.genSaltSync(5);
        const hash = bcrypt.hashSync(plainPassword, salty);
        return hash + salty;
    }

    static comparePassword(plainPassword, hashedPassword, salt) {
        const salty =
            salt || hashedPassword.substr(hashedPassword.length - 29, hashedPassword.length);
        return Crypto.cryptPassword(plainPassword, salty) === hashedPassword;
    }
}

export default Crypto;
