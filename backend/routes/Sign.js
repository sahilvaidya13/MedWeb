const express = require("express");
const router = express.Router();
0;
const {
  login,
  register,
  getqr,
  view,
  healthsetter,
  hospfetch,
} = require("../controllers/signController");

// router.post("/in", signin);
// router.post("/up", signup);
router.post("/login", login);
router.post("/signin", register);
router.get("/qrcode:id", getqr);
router.get("/fetchqr", hospfetch);
router.post("/sethealth", healthsetter);
module.exports = router;
