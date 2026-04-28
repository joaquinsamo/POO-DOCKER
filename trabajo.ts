import express from "express";

const app = express();
app.use(express.json());

let aeroplanos: any[] = [];

// CREATE
app.post("/aeroplanos", (req, res) => {
    const nuevo = { id: Date.now(), ...req.body };
    aeroplanos.push(nuevo);
    res.json(nuevo);
});

// READ
app.get("/aeroplanos", (req, res) => {
    res.json(aeroplanos);
});

// UPDATE
app.put("/aeroplanos/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = aeroplanos.findIndex(a => a.id === id);

    if (index !== -1) {
        aeroplanos[index] = { ...aeroplanos[index], ...req.body };
        res.json(aeroplanos[index]);
    } else {
        res.status(404).send("No encontrado");
    }
});

// DELETE
app.delete("/aeroplanos/:id", (req, res) => {
    const id = Number(req.params.id);
    aeroplanos = aeroplanos.filter(a => a.id !== id);
    res.send("Eliminado");
});

app.listen(3000, () => console.log("Backend en puerto 3000"));