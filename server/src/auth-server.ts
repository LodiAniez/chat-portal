import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AUTH_PORT } from "./secrets/secrets"
import { IAuth } from "./models/auth"
import { comparePassword, generateToken } from "./utils"

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

app.post("/register", async (req: Request, res: Response) => {
	try {
		const { username, password }: IAuth = req.body

		if (!username || !password) throw new Error("Username and password is required.")

		res.status(200).send({
			message: "This endpoint is under construction, you are currently receiving a dummy response."
		})
	} catch (err) {
		res.status(500).send({
			message: err.message || "Internal Server Error"
		})
	}
})

app.post("/login", async (req: Request, res: Response) => {
	try {
		const { username, password }: IAuth = req.body

		if (!username || !password) throw new Error("Username and password is required.")

		const account: IAuth = credentials.find((cred: IAuth) => cred.username === username)

		if (!account) throw new Error("Username or password is invalid.")

		const isValid: boolean = comparePassword(account.password, password)

		if (!isValid) throw new Error("Username or password is invalid.")

		const data: object = {
			username,
			timestamp: Date.now()
		}

		const accessToken: string = generateToken(data, "access")
		const refreshToken: string = generateToken(data, "refresh")

		res.status(200).send({
			message: "You are successfully logged in.",
			data: {
				accessToken, refreshToken
			}
		})
	} catch (err) {
		res.status(500).send({
			message: err.message || "Internal Server Error"
		})
	}
})

app.listen(AUTH_PORT, () => console.log(`Authentication server listening on port ${AUTH_PORT}.`))