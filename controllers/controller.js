const Booking = require("../models/model");
const dayjs = require("dayjs");

let bookings = [];

exports.createBooking = async (req, res) => {
  const { arrivalDate, departureDate, typeRoom, passengers, nombre, email } =
    req.body;
  const parsedArrivalDate = dayjs(arrivalDate).format("DD/MM/YYYY");
  const parsedDepartureDate = dayjs(departureDate).format("DD/MM/YYYY");

  const newBooking = new Booking(
    bookings.length + 1,
    parsedArrivalDate,
    parsedDepartureDate,
    passengers,
    typeRoom,
    nombre,
    email
  );
  bookings.push(newBooking);
  console.log(bookings);
  res.json({
    msg: "Reserva creada con éxito.",
    data: newBooking,
  });
};

exports.getBooking = async (req, res) => {
  const { arrivalDate, departureDate, typeRoom } = req.query;

  if (typeRoom) {
    const bookingFiltered = bookings.filter(
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

    const bookingFiltered = bookings.filter(
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
      data: bookings,
    });
  }
};

exports.getBookingById= async (req, res) => {
  const bookingId = req.params.id;
  const booking = bookings.find(booking => booking.id === bookingId );

  if (!booking) {
    return res.status(404).json({ msg: "Reserva no encontrada." })
  }
  return res.json({
    msg: 'Reserva obtenida con éxito.',
    data: booking
})
}
exports.upDateBookingById = async (req, res) => {
  const bookingId = req.params.id;
  const bookingIndex = bookings.findIndex(booking => booking.id === bookingId);

  if (bookingIndex === -1){
      return res.status(404).json({ msg: "Reserva no encontrada." })
  }

  bookings[bookingIndex] = { ...bookings[bookingIndex], ...req.body} // spread

  return res.json({
      msg: 'Reserva modificada con éxito.',
      data: bookings[bookingIndex]
  })
}

exports.deleteBookingById = async (req, res) => {
  const bookingId = req.params.id;
  const bookingIndex = bookings.findIndex(booking => booking.id === bookingId);

  if (bookingIndex === -1){
      return res.status(404).json({ msg: "Reserva no encontrada." })
  }

 bookings.splice (bookingIndex,1)

  return res.json({
      msg: 'Reserva eliminada con éxito.',
  })

}