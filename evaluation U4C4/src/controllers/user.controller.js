const express = require("express");

const user = require("../models/user.models");

const router = express.Router();

router.post("", async (req, res) => {
    try {
        const user = await user.create(req.body);
    } catch (err) {
        console.log(err);
    }
})