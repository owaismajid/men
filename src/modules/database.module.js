import { ENV } from '../../enviroment'
import mongoose from 'mongoose'

mongoose.connect(
    `mongodb://${ ENV.db.user }:${ ENV.db.password }@ds229380.mlab.com:29380/${ ENV.db.dbname }`
)

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, ".:: ERROR(DATABASE) ::."))

export { db as ODM }