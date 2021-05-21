import './App.css';

import ContainerHeader from './components/ContainerHeader/ContainerHeader';
import ContainerItem from './components/ContainerItem/ContainerItem';
import ContainerSubHeader from './components/ContainerSubHeader/ContainerSubHeader';
import { useState } from 'react';

function App() {
	const [greatHallCurrentLevel, setGreatHallCurrentLevel] = useState(0);
	const affinities = ['Magic', 'Spirit', 'Force', 'Void'];
	const stats = ['HP', 'ATK', 'DEF', 'C. DMG', 'Resist', 'ACC'];
	const [greatHallBonuses, setGreatHallBonuses] = useState([]);

	const createGreatHallBonus = (stat, affinity) => {
		const greatHallBonus = {
			stat: stat,
			affinity: affinity,
			level: 0,
			bonus: 0
		};

		if (greatHallBonuses.length < 24) {
			return setGreatHallBonuses((greatHallBonuses) => [...greatHallBonuses, greatHallBonus]);
		}
	};

	affinities.map((affinity) =>
		stats.map((stat, index) => {
			createGreatHallBonus(stat, affinity);
		})
	);

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
					{greatHallBonuses
						? greatHallBonuses.map(({ affinity, stat, level, bonus }, index) => (
								<ContainerItem
									index={index}
									id={affinity + stat}
									affinity={affinity}
									stat={stat}
									level={level}
									bonus={bonus}
									greatHallBonuses={greatHallBonuses}
									setGreatHallBonuses={setGreatHallBonuses}
									setGreatHallCurrentLevel={setGreatHallCurrentLevel}
									greatHallCurrentLevel={greatHallCurrentLevel}
								/>
						  ))
						: []}
				</div>
			</div>
		</div>
	);
}

export default App;

{
	/* <ContainerItem
					id={affinity + stat}
					affinity={affinity}
					stat={stat}
					setGreatHallCurrentLevel={setGreatHallCurrentLevel}
					greatHallCurrentLevel={greatHallCurrentLevel}
				/> */
}
