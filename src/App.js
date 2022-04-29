import './App.css';
import { Header } from './components/Header';
import { SolanaExplorer } from './components/SolanaExplorer';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='body'>
				<h1>Welcome to my Solana Explorer</h1>
				<SolanaExplorer />
			</div>
		</div>
	);
}

export default App;
