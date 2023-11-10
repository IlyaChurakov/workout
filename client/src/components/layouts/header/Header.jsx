import { BiUser } from 'react-icons/bi'
import { IoMdArrowBack } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink = '' }) => {
	/* TODO: React router useHistory */
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	if (!isAuth) return null

	return (
		<header className={styles.header}>
			{pathname !== '/' || !isAuth ? (
				<button onClick={() => navigate(isAuth ? backLink : '/auth')}>
					<IoMdArrowBack fill='#fff' fontSize={29} />
				</button>
			) : (
				<button onClick={() => navigate('/profile')}>
					<BiUser fill='#fff' fontSize={29} />
				</button>
			)}

			{isAuth && <Hamburger />}
		</header>
	)
}

export default Header
