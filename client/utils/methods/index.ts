import Cookie from "js-cookie"

export const setCookie = (key: string, value: string): string | undefined => {
	return Cookie.set(key, value)
}