export interface IAuth {
	username: string;
	password: string;
}

export interface IAuthResponse {
	accessToken: string;
	refreshToken?: string;
}