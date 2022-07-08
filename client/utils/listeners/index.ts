import { Socket } from "socket.io-client";

export const listeners = (socket: Socket) => {
	socket.on("connect", () => console.log("Connected to the socket server."))
}