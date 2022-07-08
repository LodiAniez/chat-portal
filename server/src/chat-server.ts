/**
 * 
 * Author: Dexter Louie Aniez
 * Description: This is the server for socket.io rooms and users,
 * room and user authentications
 * This is to take advantage of server scaling
 */

import express, { Express } from "express"
import http, { Server } from "http"
import { CHAT_PORT } from "./secrets/secrets"
import { Server as socketServer } from "socket.io"
import { eventListeners } from "./event-listeners/socket"

const app: Express = express()

const server: Server = http.createServer(app)
const io: socketServer = new socketServer(server, {
	cors: {
		origin: "*"	/** Wildcard for now */
	}
})

eventListeners(io)

server.listen(CHAT_PORT, () => console.log(`Chat server listening on port ${CHAT_PORT}.`))