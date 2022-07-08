import { Socket, Server } from "socket.io"

export const eventListeners = (io: Server) => {
	io.on("connection", (socket: Socket) => {
		/** Events will be triggered in this block */
		console.log("Someone alien has connected to the socket server.")
	})
}