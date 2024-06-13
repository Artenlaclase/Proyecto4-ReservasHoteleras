class Booking {
  constructor(
    id,
    arrivalDate,
    dapartureDate,
    passengers,
    typeRoom,
    name,
    mail
  ) {
    this.id = id;
    this.arrivalDate = arrivalDate;
    this.dapartureDate = dapartureDate;
    this.typeRoom = typeRoom;
    this.passengers = passengers;
    this.name = name;
    this.mail = mail;
  }

  getInfo() {
    return `Nombre: ${this.nombre}, Fecha de entrada: ${this.arrivalDate}, Fecha de Salida: ${this.dapartureDate}, Habitación: ${this.typeRoom}`;
  }
}

module.exports = Booking;
