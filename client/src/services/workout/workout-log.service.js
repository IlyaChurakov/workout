import { $axios } from '../../api'
import { WORKOUTS } from './workout.service'

const LOG = `${WORKOUTS}/log`

class WorkoutLogService {
	async getAll() {
		return await $axios.get(`${LOG}`)
	}
	async getById(id) {
		return await $axios.get(`${LOG}/${id}`)
	}
	async create(workoutId) {
		return await $axios.post(`${LOG}/${workoutId}`)
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

export default new WorkoutLogService()
