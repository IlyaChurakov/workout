import { $axios } from '../../api'

export const EXERCISES = '/exercises'

class ExerciseService {
	async getAll() {
		return await $axios.get(`${EXERCISES}`)
	}
	//name, times, iconPath
	async create(body) {
		return await $axios.post(`${EXERCISES}`, body)
	}
	async update(id, body) {
		return await $axios.put(`${EXERCISES}/${id}`, body)
	}
	async delete(id) {
		return await $axios.delete(`${EXERCISES}/${id}`)
	}
}

export default new ExerciseService()
