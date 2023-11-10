import { useMutation, useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import WorkoutLogService from '../../../../services/workout/workout-log.service.js'
import Loader from '../../../ui/Loader.jsx'
import Button from '../../../ui/button/Button.jsx'
import ExerciseItem from './ExerciseItem.jsx'
import HeaderWorkout from './HeaderWorkout.jsx'
import styles from './Workout.module.scss'

const Workout = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get workout', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	})

	const { mutate } = useMutation(
		['complete workout'],
		() => WorkoutLogService.complete(id),
		{
			onSuccess: () => {
				navigate('/workouts')
			}
		}
	)

	return (
		<>
			<HeaderWorkout workoutLog={workoutLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
							<Fragment key={index}>
								<ExerciseItem exerciseLog={exerciseLog} />
								{index % 2 !== 0 &&
									index !== workoutLog.exerciseLogs.length - 1 && (
										<div className={styles.line}></div>
									)}
							</Fragment>
						))}
					</div>
				)}
				<Button clickHandler={() => mutate()}>Complete workout</Button>
			</div>
		</>
	)
}

export default Workout
