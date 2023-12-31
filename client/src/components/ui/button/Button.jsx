import cn from 'clsx'
import React from 'react'
import styles from './Button.module.scss'

const Button = ({ children, clickHandler, size = 'xl' }) => {
	return (
		<div className={styles.wrapper}>
			<button
				onClick={clickHandler}
				className={cn(styles.button, styles[size])}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
