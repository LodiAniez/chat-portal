import axios from "axios"
import { IAuth, IAuthResponse } from '../models/index';

export const login = async (data: IAuth): Promise<IAuthResponse> => {
	try {
		const { username, password } = data

		return {
			token: "somerandomtokenheregeneratedfromthebackend"
		}
	} catch (err) {
		throw err
	}
}