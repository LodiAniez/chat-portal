import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AUTH_PORT } from "./secrets/secrets"
import { IAuth } from "./models/auth"

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

/**
 * 
 * Since the database is not configured yet and we
 * need to process our data already from the frontend,
 * we will temporarily create our dummy data using an array.
 */
const credentials: IAuth[] = [
	{
		username: "test1",
		password: "$2a$10$h3q46H8PUi5eEuu/jtQld.R2QjIZfBArBWMSFvPCEdITM.GuOFWJW"
	},
	{
		username: "test2",
		password: "$2a$10$FECRTwmhh07Og.OURIDJhOidY.TuXZSIPlrzPpAbaO9JUYs8lW7D2"
	}
]

app.post("/login", async (req: Request, res: Response) => {
	try {

	} catch (err) {
		res.status(500).send({
			message: err.message || "Internal Server Error"
		})
	}
})

app.listen(AUTH_PORT, () => console.log(`Authentication server listening on port ${AUTH_PORT}.`))