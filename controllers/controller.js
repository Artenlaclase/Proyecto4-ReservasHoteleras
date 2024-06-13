const Booking = require("../models/model");
const dayjs = require("dayjs");

let users = [];

exports.createBooking = async (req, res) => {
  const { arrivalDate, departureDate, typeRoom, passengers, nombre, email } =
    req.body;
  const parsedArrivalDate = dayjs(arrivalDate).format("DD/MM/YYYY");
  const parsedDepartureDate = dayjs(departureDate).format("DD/MM/YYYY");

  const newBooking = new Booking(
    users.length + 1,
    parsedArrivalDate,
    parsedDepartureDate,
    passengers,
    typeRoom,
    nombre,
    email
  );
  users.push(newBooking);
  console.log(users);
  res.json({
    msg: "Reserva creada con éxito.",
    data: newBooking,
  });
};

exports.getBooking = async (req, res) => {
  const { arrivalDate, departureDate, typeRoom } = req.query;

  if (typeRoom) {
    const bookingFiltered = users.filter(
      (booking) => booking.typeRoom === typeRoom
    );
    if (bookingFiltered.length === 0) {
      return res
        .status(404)
        .json({ msg: "no se encontraron esas habitaciones " });
    }

    return res.json({
      msg: "tipo de habitaciones",
      data: bookingFiltered,
    });
  } else if (arrivalDate && departureDate) {
    const parsedArrivalDate = dayjs(arrivalDate).format("DD/MM/YYYY");
    const parsedDepartureDate = dayjs(departureDate).format("DD/MM/YYYY");

    const bookingFiltered = users.filter(
      (booking) =>
        booking.arrivalDate.isBetween(
          parsedArrivalDate,
          parsedDepartureDate
        ) === true
    );
    if (usersFiltered.length === 0) {
      return res.status(404).json({ msg: "No se encontraron usuarios" });
    }
    return res.json({
      msg: "Reservas",
      data: bookingFiltered,
    });
  } else {
    return res.json({
      msg: "Reservas",
      data: users,
    });
  }
};
