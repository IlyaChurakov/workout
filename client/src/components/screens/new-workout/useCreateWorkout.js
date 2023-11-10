import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import WorkoutService from '../../../services/workout/workout.service'

const useCreateWorkout = () => {
	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create workout'],
		body => WorkoutService.create(body),
		{
			onSuccess: () => {
				reset({
					name: '',
					exerciseIds: []
				})
			}
		}
	)

	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		})
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
			onSubmit,
			control
		}),
		[isSuccess, error, isLoading, errors]
	)
}

export default useCreateWorkout
