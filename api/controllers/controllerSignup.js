const bcrypt = require("bcryptjs");
const User = require("../models/user");

const controllerSignup = async (req, res) => {
    console.log(req.body)
    const { email, password, conformPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already registered" });
        }
        console.log(req.body)

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        const savedUser = await newUser.save();

        return res.json({ message: "User registered successfully", user: savedUser });
    } catch (err) {
        return res.json({ message: "Error saving user in database", error: err.message });
    }
};

module.exports = controllerSignup;
