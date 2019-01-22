import React from 'react';

class DefaultToolTip extends React.Component {
	render() {
		const { count, step, end, prevStep, nextStep, goToStepNumber } = this.props;
		const prevProps = {
			onClick: prevStep,
		}
		if (step === 1) {
			prevProps.disabled = 'disabled'
		}
		const nextProps = {
			onClick: nextStep,
		}
		if (step === count) {
			nextProps.onClick = end;
		}
		return <div>detault tips
			<div>
				<ul style={{
					listStyle: 'none',
					display: 'flex',
					textAlign: 'center',
					width: '50%',
					margin: '10px auto'
				}}>
					{new Array(count).fill(0).map((v, index) => {
						return <li
							key={index}
							onClick={() => goToStepNumber(index + 1)}
							style={{
								margin: '0 5px',
								cursor: 'pointer',
								width: '5px', 'height': '5px', borderRadius: '50%',
								background: step === (index + 1) ? '#333' : '#eee',
							}}>

						</li>
					})}
				</ul>
				<button onClick={end}>skip</button>
				<button {...prevProps}>previous</button>
				<button {...nextProps}>{step === count ? 'end' : 'next'}</button>
			</div>
		</div>;
	}
}

DefaultToolTip.propTypes = {};

export default DefaultToolTip;
