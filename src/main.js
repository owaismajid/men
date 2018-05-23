import express from 'express';
import { AppRouter } from './routes/app.routes';
import { ApiRouter } from './routes/api.routes'
const app = express();
app.use("/", AppRouter)
app.use('/api', ApiRouter)
app.listen(3000, ()=>console.info("Server is Working"))


