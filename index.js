const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log("Servidor iniciado en el puerto" + port);
});
