import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layouts/Layout'
import Loader from '../../ui/Loader'
import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import SelectExercises from './SelectExercises'
import useCreateWorkout from './useCreateWorkout'

const NewWorkout = () => {
	const {
		isSuccess,
		error,
		isLoading,
		register,
		handleSubmit,
		errors,
		onSubmit,
		control
	} = useCreateWorkout()

	return (
		<>
			<Layout
				heading='CREATE NEW WORKOUT'
				bgImage='/images/new-workout-bg.jpg'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error.message} />}
				{isSuccess && <Alert text='Workout created successfully' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Workout name is required'
						}}
						type='text'
						placeholder='Workout name'
					/>

					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>

					<SelectExercises control={control} />

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
