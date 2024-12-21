const express =require("express");
const controllerSignup=require("../controllers/controllerSignup")


const router = express.Router();

// Define the POST /signup route
router.post("/signup", controllerSignup);

module.exports = router;
