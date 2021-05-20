import './App.css';

import ContainerHeader from './components/ContainerHeader/ContainerHeader';
import ContainerItem from './components/ContainerItem/ContainerItem';
import ContainerSubHeader from './components/ContainerSubHeader/ContainerSubHeader';
import { useState } from 'react';

function App() {
	const [greatHallCurrentLevel, setGreatHallCurrentLevel] = useState(0);
	const affinities = ['Magic', 'Spirit', 'Force', 'Void'];
	const stats = ['HP', 'ATK', 'DEF', 'C. DMG', 'Resist', 'ACC'];

	return (
		<div className='App'>
			<ContainerHeader currentLevel={greatHallCurrentLevel} />
			<ContainerSubHeader stats={stats} />
			<div className='container'>
				<div className='affinities-container'>
					{affinities.map((affinity, index) => (
						<div key={index * 114} className='affinity'>
							{affinity}
						</div>
					))}
				</div>
				<div className='main-container'>
					{affinities.map((affinity) =>
						stats.map((stat, index) => <ContainerItem id={index * 13} stat={stat} />)
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
