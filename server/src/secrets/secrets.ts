import { config } from "dotenv"
config()

export const MAIN_PORT: string | number = process.env.MAIN_PORT || 8080
export const CHAT_PORT: string | number = process.env.CHAT_PORT || 7000
export const AUTH_PORT: string | number = process.env.AUTH_PORT || 4000
export const SALTROUND: string | number = process.env.SALTROUND || 10
export const ACCESS_TOKEN_SECRET: string | undefined = process.env.ACCESS_TOKEN_SECRET || undefined
export const REFRESH_TOKEN_SECRET: string | undefined = process.env.REFRESH_TOKEN_SECRET || undefined