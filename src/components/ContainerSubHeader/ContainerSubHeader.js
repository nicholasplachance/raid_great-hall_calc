import './ContainerSubHeader.css';

const ContainerSubHeader = (props) => {
	return (
		<div className='container-subheader'>
			<div className='spacer stats'>Affinity</div>
			{props.stats.map((stat, index) => (
				<div key={index * 13} className='stats'>
					{stat}
				</div>
			))}
		</div>
	);
};

export default ContainerSubHeader;
