import express from "express"
import { router } from "./routes/routes_task.js"

const app = express()

app.use(express.json())
app.use(router)

app.listen(4000, console.log("Servidor Funcionando"))