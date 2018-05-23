import express from 'express';
import { AppRouter } from './routes/app.routes';
import { ApiRouter } from './routes/api.routes';
import * as bodyParser from 'body-parser';
import * as path from 'path';


const app = express()
/**
 * App middelwares
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/**
 * App routes
 */
app.use("/", AppRouter)
app.use('/api', ApiRouter)

/**
 * App server listener
 */
app.listen(3000, ()=>console.info("Server is Working"))


export { app as App}