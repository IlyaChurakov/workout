import axios from 'axios'
import Cookies from 'js-cookie'
import { TOKEN } from './app.constants'

export const $axios = axios.create({
	baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
	headers: {
		'Content-Type': 'application/json'
	}
})

$axios.interceptors.request.use(config => {
	config.headers.Authorization = Cookies.get(TOKEN)
		? `Bearer ${Cookies.get(TOKEN)}`
		: ''
	return config
})
