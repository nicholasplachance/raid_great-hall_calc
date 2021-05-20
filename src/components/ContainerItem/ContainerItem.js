import { useState } from 'react';

const ContainerItem = (props) => {
	const itemMaxLevel = 10;
	const [itemLevel, setItemLevel] = useState(0);
	const [itemLevelGain, setItemLevelGain] = useState(0);

	const subtract = (e) => {
		if (itemLevel > 0) {
			setItemLevel(itemLevel - 1);
		}
	};

	const add = (e) => {
		if (itemLevel < 10) {
			setItemLevel(itemLevel + 1);
		}
	};

	return (
		<div key={props.id} className='container-item'>
			<p>
				{itemLevel}/{itemMaxLevel}
			</p>
			<span>{props.stat}</span>
			<p>{itemLevelGain}%</p>
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
