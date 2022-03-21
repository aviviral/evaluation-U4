const express = require("express")

const router = express.Router()

const user = ("../models/user.models")

router.post("/",
body("firstName")
.not()
.islength()
)

module.exports=router;