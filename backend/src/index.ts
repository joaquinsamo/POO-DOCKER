import express from "express";
import aeroplanoRoutes from "./routes/aeroplano.routes";

const app = express();

app.use(express.json());

// ruta base
app.use("/aeroplanos", aeroplanoRoutes);

app.listen(3000, ()=>{
    console.log("Servidor corriendo en puerto 3000 🚀");
});