import express from 'express';
import { AppRouter } from './routes/app.routes';
const app = express();
app.use("/", AppRouter)
app.listen(3000, ()=>console.info("Server is Working"))


