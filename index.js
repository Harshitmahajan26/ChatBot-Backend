import express from "express"
import dotenv from "dotenv"
import connectDb from "./database/db.js"  // we have to apply .js because we are using type module in package.json file
import cors from "cors"

dotenv.config()

const app = express()

//using middleware
app.use(express.json())
app.use(cors())

//importing routes
import userRoutes from "./routes/userRoutes.js"
import chatRoutes from "./routes/chatRoutes.js"

// using routes
app.use("/api/user", userRoutes)
app.use("/api/chat", chatRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
    connectDb()
})