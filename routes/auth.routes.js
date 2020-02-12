const {Router} = require("express"),
      router = Router()

// /api/auth/register
router.post("/register", async (req, res) => {
    console.log("register"); 
});

// /api/auth/login
router.post("/login", async (req, res) => {
    console.log("login"); 
});

module.exports = router;