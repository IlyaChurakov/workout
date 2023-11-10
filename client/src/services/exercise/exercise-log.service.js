import { $axios } from '../../api'
import { EXERCISES } from './exercise.service'

const LOG = `${EXERCISES}/log`

class ExerciseLogService {
	async getAll() {
		return await $axios.get(`${LOG}`)
	}
	async getById(id) {
		return await $axios.get(`${LOG}/${id}`)
	}
	async create(exerciseId) {
		return await $axios.post(`${LOG}/${exerciseId}`)
	}
	// weight: 10
	// repeat: 20
	// isCompleted: true
	async updateTime(timeId, body) {
		return await $axios.put(`${LOG}/time/${timeId}`, body)
	}
	// isCompleted: true
	async complete(id, body) {
		return await $axios.patch(`${LOG}/complete/${id}`, body)
	}
}

export default new ExerciseLogService()
