import './App.css';

import ContainerHeader from './components/ContainerHeader/ContainerHeader';
import ContainerItem from './components/ContainerItem/ContainerItem';
import ContainerSubHeader from './components/ContainerSubHeader/ContainerSubHeader';

function App() {
	const affinities = ['Magic', 'Spirit', 'Force', 'Void'];
	const stats = ['HP', 'ATK', 'DEF', 'C. DMG', 'Resist', 'ACC'];

	return (
		<div className='App'>
			<ContainerHeader />
			<ContainerSubHeader stats={stats} />
			<div className='container'>
				<div className='affinities-container'>
					{affinities.map((affinity) => (
						<div className='affinity'>{affinity}</div>
					))}
				</div>
				<div className='main-container'>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
					<div className='container-item'></div>
				</div>
			</div>
		</div>
	);
}

export default App;
