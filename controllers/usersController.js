const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const User = require("../config/models/user.js");

async function signup(req, res) {
    try {
    // Get the email and password off req body
    const { email, password } = req.body;

    // Hash Password 
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a user with the data
    await User.create({ email, password: hashedPassword })

    // respond
    res.sendStatus(200);
    } catch(err) {
        console.log(err)
        res.sendStatus(400)
    }
}

async function login(req, res) {
    try{
        // Get the email and password of req body
        const { email, password } = req.body

        // Find the user with requested email
        const user = await User.findOne({ email })
        if (!user) return res.sendStatus(401)

        // Compare send password with found user password hash
        const passwordMatch = bcrypt.compareSync(password, user.password)
        if (!passwordMatch) return res.sendStatus(401)

        // create a jwt token
        const exp = Date.now() + 1000 * 60 * 60 *24 * 30;
        const token = jwt.sign({ sub: user._id, exp: exp }, process.env.SECRET)

        // Set the Cookie
        res.cookie("Authorization", token, {
            expires: new Date(exp), 
            httpOnly: true,
            sameSite: 'lax', // prevent the browser from sending cookies in unsafe cross-site requests
            secure: process.env.NODE_ENV === "production",
        });

        // send jwt token
        res.sendStatus(200)
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
    }

function logout(req, res) {
    try {
    res.clearCookie("Authorization");
    res.sendStatus(200)
    } catch(err) {
        console.log(err)
        res.sendStatus(400)
    }
}

function checkAuth(req, res) {
    try {
        res.sendStatus(200)
    } catch (err) { 
        return res.sendStatus(400)
    }
}

module.exports = {
    signup,
    login,
    logout,
    checkAuth,
}