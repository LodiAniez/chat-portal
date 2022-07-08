/**
 * 
 * Author: Dexter Louie Aniez
 * Description: This is the application's main server
 */

import express, { Express } from "express"
import cors from "cors"
import { MAIN_PORT } from "./secrets/secrets"
import { route } from "./middlewares/route"

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

route(app)

app.listen(MAIN_PORT, () => console.log(`Protected server is listening on port ${MAIN_PORT}.`))