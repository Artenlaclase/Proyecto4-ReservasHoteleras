class Booking {
  constructor(id, arrivalDate, dapartureDate, passengers, room, name, mail) {
    this.id = id;
    this.arrivalDate = arrivalDate;
    this.dapartureDate = dapartureDate;
    this.room = room;
    this.passengers = passengers;
    this.name = name;
    this.mail = mail;
  }

  getInfo() {
    return `Nombre: ${this.nombre}, Fecha de entrada: ${this.arrivalDate}, Fecha de Salida: ${this.dapartureDate}, Habitación: ${this.room}`;
  }
}

module.exports = Booking;
