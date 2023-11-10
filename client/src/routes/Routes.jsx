import { Route, Routes } from 'react-router-dom'
import NotFound from '../components/screens/not-found/NotFound'
import { useAuth } from '../hooks/useAuth'
import { routes } from './routes.data'

const Router = () => {
	const { isAuth } = useAuth()

	return (
		<Routes>
			{routes.map(route => {
				if (route.isAuth && !isAuth) {
					return false
				}

				return (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				)
			})}
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default Router
