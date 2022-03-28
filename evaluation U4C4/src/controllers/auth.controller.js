const user = require("../models/user.models");

const jwtoken = require("jsonwebtoken");

require("dotenv").config();

const generateToken = (user) => {
    return jwtoken.sign({ user }.process.env.SECRET_KEY)
}

const register = async (req, res) => {
    try {
        let user = await user.findOne({ email: req.body.email })

        if (user) {
            return res.status(400).send({ message: "email already exists" })
        }
        user = await user.create(req.body);

        const token = generateToken(user)
        return res.status(200).send({ user: token })
    } catch (err) {
        res.status(400).send({ message: err.message })

    }
}

const login = async (req, res) => {
    try {
        const user = await user.findOne({ email: req.body.email })

        if (user) {
            return res.status(400).send("wrong Email or Password")
        }

        const matched = user.checkPassword(req.body.password)

        if (!matched) {
            return res.status(400).send({ message: "wrong Email or Password" })
        }

        const token = generateToken(user)
        return res.status(200).send({ user, token })
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

module.exports = { register, login, generateToken }