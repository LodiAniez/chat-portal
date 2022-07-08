import { config } from "dotenv"
config()

export const MAIN_PORT: string | number = process.env.MAIN_PORT || 8080
export const CHAT_PORT: string | number = process.env.CHAT_PORT || 7000