const router = require("express").Router();
const mainController = require("../controllers/main");

router.get("/", mainController.getIndex);
router.get('/login', mainController.login)
router.get('/signup', mainController.signup)
router.get('/change-password', mainController.changePassword)
router.get('/reset-password', mainController.resetPassword)



module.exports = router;