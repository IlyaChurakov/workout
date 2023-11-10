import { useQuery } from '@tanstack/react-query'
import ExerciseService from '../../../services/exercise/exercise.service'

const useListExercises = () =>
	useQuery(['list exercises'], () => ExerciseService.getAll(), {
		select: ({ data }) => data
	})

export default useListExercises
