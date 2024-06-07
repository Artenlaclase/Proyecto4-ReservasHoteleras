const express = require("express");
const bookingController = require("../controllers/controller");

const router = express.Router();

router.post("/booking", bookingController.createBooking);
router.get("/booking", bookingController.getBooking);

module.exports = router;