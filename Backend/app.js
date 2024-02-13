import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {dbConnection} from "./database/dbConnection.js"
import { errorMiddleware } from "./error/error.js"
import reservationRouter from "./routes/reservationRoute.js"
// udhar ka name , jo import krna vahi name hoga to {} isme insert

const app = express()
dotenv.config({path:"./config/config.env"})

//connecting frontend to backend
app.use(cors({
    origin:[process.env.FRONTEND_URI], ///path
    methods:["POST"],//Konse method hai
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// parse incoming request bodies with URL-encoded data.
app.use("/api/v1/reservation",reservationRouter)
//phle path diye- not jaruri but best practice,,,

dbConnection();  

app.use(errorMiddleware)
// is file me middle aa gyi, badme export

export default app