const Booking = require('../models/model');

let users = [];

exports.createBooking = async (req, res) => {
    const {arrivalDate, departureDate, room, passengers, nombre, email} = req.body;
    const newBooking = new Booking(users.length + 1, arrivalDate, departureDate, passengers, room, nombre, email)
    users.push(newBooking);

    res.json({
        msg: "Reserva creada con éxito.",
        data: newBooking
    })
}
