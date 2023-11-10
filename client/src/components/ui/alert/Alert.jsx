import cn from 'clsx'
import React, { useEffect, useState } from 'react'

import styles from './Alert.module.scss'

const Alert = ({ type = 'success', text }) => {
	const [hidden, setHidden] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setHidden(true)
		}, 3000)

		return () => clearTimeout(timer)
	}, [])

	if (hidden) return null

	return <div className={cn(styles.alert, styles[type])}>{text}</div>
}

export default Alert
