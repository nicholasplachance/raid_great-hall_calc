import { useState } from 'react';

const ContainerItem = (props) => {
	const itemMaxLevel = 10;

	console.log(props.greatHallBonuses[props.index].level);

	const subtract = (e) => {
		if (props.level > 0) {
			props.greatHallBonuses[props.index].level = props.greatHallBonuses[props.index].level - 1;
			props.setGreatHallCurrentLevel(props.greatHallCurrentLevel - 1);
		}
	};

	const add = (e) => {
		if (props.level < 10) {
			props.greatHallBonuses[props.index].level = props.greatHallBonuses[props.index].level + 1;
			props.setGreatHallCurrentLevel(props.greatHallCurrentLevel + 1);
		}
	};

	return (
		<div key={props.id} className='container-item'>
			<p>
				{props.level}/{itemMaxLevel}
			</p>
			<span>{props.stat}</span>
			<p>{props.bonus}%</p>
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
