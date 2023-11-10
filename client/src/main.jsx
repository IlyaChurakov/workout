import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Store from './Store'
import './assets/styles/index.scss'
import AuthProvider from './providers/AuthProvider'
import Router from './routes/Routes'

export const Context = createContext(null)

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<Context.Provider value={{ user: new Store() }}>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</QueryClientProvider>
		</AuthProvider>
	</Context.Provider>
)
