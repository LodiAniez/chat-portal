import { compareSync, hashSync } from "bcrypt"
import { SALTROUND, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../secrets/secrets';
import { sign, SignOptions } from "jsonwebtoken"

export const hashPassword = (password: string): string => {
	return hashSync(password, SALTROUND)
}

export const comparePassword = (hashedPassword: string, plainPassword: string): boolean => {
	return compareSync(plainPassword, hashedPassword)
}

export const generateToken = (data: object, type: "access" | "refresh"): string => {
	const secret: string | undefined = type === "access"
		? ACCESS_TOKEN_SECRET
		: REFRESH_TOKEN_SECRET

	const options: SignOptions | undefined = type === "access"
		? { expiresIn: "30s" }
		: undefined

	return sign(data, secret, options)
}