import axios from "axios"
import { IAuth, IAuthResponse } from '../models/index';
import { EEndpoint } from "../enums/endpoints";

const { CHAT_SERVER, AUTH_SERVER, MAIN_SERVER } = EEndpoint

export const login = async (data: IAuth): Promise<IAuthResponse> => {
	try {
		const { username, password } = data

		const loginResponse: IAuthResponse = await axios.post(`${AUTH_SERVER}/login`, {
			username, password
		})

		return loginResponse
	} catch (err) {
		throw err
	}
}