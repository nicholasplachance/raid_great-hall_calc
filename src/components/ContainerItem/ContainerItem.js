import './ContainerItem.css';

import { useState } from 'react';

const ContainerItem = (props) => {
	const itemMaxLevel = 10;

	const setBonusLevelPercent = () => {
		props.greatHallBonuses[props.index].bonus =
			props.bonusLevelsGainsPercent[0][`${props.greatHallBonuses[props.index].level}`];
	};

	const setBonusLevelCDMG = () => {
		props.greatHallBonuses[props.index].bonus =
			props.bonusLevelsGainsCDMG[0][`${props.greatHallBonuses[props.index].level}`];
	};

	const setBonusLevelFlat = () => {
		props.greatHallBonuses[props.index].bonus =
			props.bonusLevelsGainsFlatStat[0][`${props.greatHallBonuses[props.index].level}`];
	};

	const setBonusLevel = () => {
		if (['ATK', 'HP', 'DEF'].includes(props.stat)) {
			setBonusLevelPercent();
		}

		if (['C. DMG'].includes(props.stat)) {
			setBonusLevelCDMG();
		}

		if (['ACC', 'Resist'].includes(props.stat)) {
			setBonusLevelFlat();
		}
	};

	const setCurrentCost = () => {
		props.greatHallBonuses[props.index].cost =
			props.greatHallBonuses[props.index].cost +
			props.bonusLevelsCost[0][`${props.greatHallBonuses[props.index].level}`];
	};

	const checkNextCost = () => {
		let nextCost;

		nextCost = props.bonusLevelsCost[0][`${props.greatHallBonuses[props.index].level + 1}`];
		return nextCost;
	};

	const subtract = (e) => {
		if (props.level > 0) {
			props.greatHallBonuses[props.index].level = props.greatHallBonuses[props.index].level - 1;
			props.setGreatHallCurrentLevel(props.greatHallCurrentLevel - 1);
		}
		if (props.greatHallBonuses[props.index].level < 10) {
			setBonusLevel();
			setCurrentCost();
		}
	};

	const add = (e) => {
		if (props.level < 10) {
			props.greatHallBonuses[props.index].level = props.greatHallBonuses[props.index].level + 1;
			props.setGreatHallCurrentLevel(props.greatHallCurrentLevel + 1);
		}
		if (props.greatHallBonuses[props.index].level > 0) {
			setBonusLevel();
			setCurrentCost();
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
			<p>Next cost: {checkNextCost()}</p>
		</div>
	);
};

export default ContainerItem;
