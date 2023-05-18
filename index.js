import express  from "express";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import { dataBaseConnection } from "./DB.js";
import { signupRouter } from "./routes/signupUsersRoute.js";
import { loginRouter } from "./routes/loginRouter.js";
import { forgetPasswordRouter } from "./routes/forgetPassword.js";
import { isSignedIn } from "./controllers/auth.js";
import { User } from "./models/user.js";

dataBaseConnection()


const app=express();
app.use(express.json());
app.use(cors());


app.use("/api/signup",signupRouter)
app.use("/api/login",loginRouter)
app.use("/api/forgetPassword",forgetPasswordRouter)


const PORT=process.env.PORT
app.listen(PORT,()=>{console.log(`Successfully  hoisted in ${PORT} Port`)})

app.get("/",(req,res)=>{
    res.send("Server is Hoisted")
})