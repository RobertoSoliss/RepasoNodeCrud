import { createPool } from "mysql2/promise";
import{USER, PASSWORD, HOST, DBPORT, DBNAME} from './deploy.js'

export const pool=createPool({
    user:USER,
    password:PASSWORD,
    host:HOST,
    port:DBPORT,
    database:DBNAME
})
