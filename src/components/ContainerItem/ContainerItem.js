import { useState } from 'react';

const ContainerItem = (props) => {
	const itemMaxLevel = 10;

	console.log(props.greatHallBonuses[props.index].level);
	console.log(props.bonusLevelsGainsPercent[0][1]);

	const setBonusLevel = () => {
		if (['ATK', 'HP', 'DEF'].includes(props.stat)) {
			props.greatHallBonuses[props.index].bonus =
				props.bonusLevelsGainsPercent[0][`${props.greatHallBonuses[props.index].level}`];
		}

		if (['C. DMG'].includes(props.stat)) {
			props.greatHallBonuses[props.index].bonus =
				props.bonusLevelsGainsCDMG[0][`${props.greatHallBonuses[props.index].level}`];
		}

		if (['ACC', 'Resist'].includes(props.stat)) {
			props.greatHallBonuses[props.index].bonus =
				props.bonusLevelsGainsFlatStat[0][`${props.greatHallBonuses[props.index].level}`];
		}
	};

	const subtract = (e) => {
		if (props.level > 0) {
			props.greatHallBonuses[props.index].level = props.greatHallBonuses[props.index].level - 1;
			props.setGreatHallCurrentLevel(props.greatHallCurrentLevel - 1);
		}
		if (props.greatHallBonuses[props.index].level < 10) {
			setBonusLevel();
		}
	};

	const add = (e) => {
		if (props.level < 10) {
			props.greatHallBonuses[props.index].level = props.greatHallBonuses[props.index].level + 1;
			props.setGreatHallCurrentLevel(props.greatHallCurrentLevel + 1);
		}
		if (props.greatHallBonuses[props.index].level > 0) {
			setBonusLevel();
		}
	};

	return (
		<div key={props.id} className='container-item'>
			<p>
				{props.level}/{itemMaxLevel}
			</p>
			<span>{props.stat}</span>
			<p>{['ACC', 'Resist'].includes(props.stat) ? props.bonus : props.bonus + '%'}</p>
			<div>
				<button className='subtract' onClick={() => subtract()}>
					-
				</button>{' '}
				<button className='add' onClick={() => add()}>
					+
				</button>
			</div>
		</div>
	);
};

export default ContainerItem;
