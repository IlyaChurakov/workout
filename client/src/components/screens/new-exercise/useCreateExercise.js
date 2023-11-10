import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import ExerciseService from '../../../services/exercise/exercise.service'

const useCreateExercise = () => {
	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create exercise'],
		body => ExerciseService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	return useMemo(
		() => ({
			isSuccess,
			error,
			isLoading,
			register,
			handleSubmit,
			errors,
			control,
			onSubmit
		}),
		[isSuccess, error, isLoading, errors]
	)
}

export default useCreateExercise
