import './ContainerHeader.css';

const ContainerHeader = (props) => {
	return <div className='container-header'>Great Hall | Development Level: {props.currentLevel}</div>;
};

export default ContainerHeader;
