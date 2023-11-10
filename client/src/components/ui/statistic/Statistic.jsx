import React from 'react'
import styles from './Statistic.module.scss'

const Statistic = () => {
	const data = [
		{
			title: 'Minutes',
			value: 20
		},
		{
			title: 'Level',
			value: 'Hard'
		},
		{
			title: 'Up',
			value: '5%'
		}
	]

	return (
		<div className={styles.wrapper}>
			<div className={styles.statistic}>
				{data.map((column, index) => {
					return (
						<div key={index} className={styles.statistic__column}>
							<div className={styles.statistic__column_title}>
								{column.title}
							</div>
							<div className={styles.statistic__column_value}>
								{column.value}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Statistic
