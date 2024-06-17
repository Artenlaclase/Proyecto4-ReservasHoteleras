const Booking = require("../models/model");
const dayjs = require("dayjs");

let bookings = [];

exports.createBooking = async (req, res) => {
  const { nameHotel ,arrivalDate, departureDate, typeRoom, passengers, name, mail, paymentStatus } =
    req.body;
    
    // Verificar el contenido de req.body
    console.log("Datos recibidos:", req.body);

    // // Validar que las fechas arrivalDate y departureDate sean válidas.

    if (!arrivalDate || !departureDate) {
      return res.status(400).json ({
        msg: "Faltan fecha de llegada o de salida.",
      })
    }

  const parsedArrivalDate = dayjs(arrivalDate).format("DD/MM/YYYY");
  const parsedDepartureDate = dayjs(departureDate).format("DD/MM/YYYY");

    // Verificar las fechas convertidas 
    console.log("Fecha de llegada: ", parsedArrivalDate);
    console.log("Fecha de Salida: ", parsedDepartureDate);

    // Crear la nueva Reserva

  const newBooking = new Booking(
    bookings.length + 1,
    nameHotel,
    parsedArrivalDate,
    parsedDepartureDate,
    passengers,
    typeRoom,
    name,
    mail,
    paymentStatus
  );
  bookings.push(newBooking);
  console.log("Reservas:", bookings);

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