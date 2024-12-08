import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/users`

const getAll = () => {
	const request = axios.get(baseUrl).then(request => request.data)
	return request
}

export default { getAll }
