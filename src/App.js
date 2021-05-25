import './App.css';

import ContainerHeader from './components/ContainerHeader/ContainerHeader';
import ContainerItem from './components/ContainerItem/ContainerItem';
import ContainerSubHeader from './components/ContainerSubHeader/ContainerSubHeader';
import ControlPanel from './components/ControlPanel/ControlPanel';
import { useState } from 'react';

function App() {
	const [greatHallCurrentLevel, setGreatHallCurrentLevel] = useState(0);
	const affinities = ['Magic', 'Spirit', 'Force', 'Void'];
	const stats = ['HP', 'ATK', 'DEF', 'C. DMG', 'Resist', 'ACC'];
	const [greatHallBonuses, setGreatHallBonuses] = useState([]);
	const [totalMedalsCost, setTotalMedalsCost] = useState(0);

	const bonusLevelsCost = [
		{
			0: 0,
			1: 50,
			2: 100,
			3: 150,
			4: 300,
			5: 400,
			6: 500,
			7: 800,
			8: 1000,
			9: 1200,
			10: 1400
		}
	];

	const bonusLevelsGainsPercent = [
		{
			0: 0,
			1: 2,
			2: 3,
			3: 4,
			4: 6,
			5: 8,
			6: 10,
			7: 12,
			8: 14,
			9: 17,
			10: 20
		}
	];

	const bonusLevelsGainsCDMG = [{ 0: 0, 1: 2, 2: 4, 3: 6, 4: 8, 5: 10, 6: 12, 7: 15, 8: 18, 9: 21, 10: 25 }];

	const bonusLevelsGainsFlatStat = [{ 0: 0, 1: 5, 2: 10, 3: 15, 4: 20, 5: 30, 6: 40, 7: 50, 8: 60, 9: 70, 10: 80 }];

	const createGreatHallBonus = (stat, affinity) => {
		const greatHallBonus = {
			stat: stat,
			affinity: affinity,
			level: 0,
			bonus: 0,
			cost: 0
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

	const checkCurrentCost = () => {
		const totalCost = greatHallBonuses.reduce((accum, item) => accum + item.cost, 0);
		const silverCost = totalCost / 2;
		const goldCost = totalCost / 4;
		const allMedalsCost = { bronze: totalCost, silver: silverCost, gold: goldCost };
		return allMedalsCost;
	};

	const reset = () => {
		greatHallBonuses.forEach((bonus) => {
			bonus.level = 0;
			bonus.bonus = 0;
			bonus.cost = 0;
		});

		checkCurrentCost();

		setGreatHallCurrentLevel(0);
	};

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
									bonusLevelsGainsPercent={bonusLevelsGainsPercent}
									bonusLevelsGainsFlatStat={bonusLevelsGainsFlatStat}
									bonusLevelsGainsCDMG={bonusLevelsGainsCDMG}
									bonusLevelsCost={bonusLevelsCost}
								/>
						  ))
						: []}
				</div>
			</div>
			<ControlPanel>
				<div className='control-panel-sub buttons'>
					<button className='reset control-button' onClick={() => reset()}>
						Reset
					</button>
				</div>
				<div className='control-panel-sub display'>
					<p>Total Cost in Bronze Medals: {checkCurrentCost().bronze}</p>
					<p>Total Cost in Silver Medals: {checkCurrentCost().silver}</p>
					<p>Total Cost in Gold Medals: {checkCurrentCost().gold}</p>
				</div>
			</ControlPanel>
		</div>
	);
}

export default App;
