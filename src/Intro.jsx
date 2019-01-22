import React from 'react';
import ReactDom from 'react-dom';
import { newController, getController } from './Controller';
import { prefix } from "./config";
import DefaultToolTip from "./DefaultToolTip";
import { findParentDomHasZ, addFixClass, removeFixClass } from './utils';
import './style.less';

class Intro extends React.Component {
	static propsTypes = {
		name: String,
		step: Number,
		placement: String,
		tooltip: React.dom
	}
	static defaultProps = {
		name: 'global',
		step: 1,
		placement: 'top',
		tooltip: <DefaultToolTip />
	}
	state = {
		fixList: []
	}
	constructor(props) {
		super(props);
		const { name = 'global', step } = props;
		this.name = name;
		this.step = step;
		this.checkProps(props)
		this.controller = newController(this);
	}
	setActive() {
		const fixList = findParentDomHasZ(this.el);
		addFixClass(fixList, `${prefix}-fixParent`)
		this.setState({
			fixList,
		});
	}
	unsetActive() {
		const { fixList } = this.state;
		removeFixClass(fixList, `${prefix}-fixParent`)
		this.setState({
			fixList: []
		});
	}
	checkProps(props) {
		const { step } = props;
		// 检测step
		if (step === undefined) {
			throw new Error('step属性不能为空');
		}
	}
	getTooltipProps = () => {
		const { controller } = this;
		const { step, count, start, end, goToStep, nextStep, prevStep, goToStepNumber } = controller;
		return { step, count, start, end, goToStep, nextStep, prevStep, goToStepNumber }
	}
	renderTooltip = (display) => {
		if (!display) return
		const { tooltip } = this.props;
		const { tooltipLayout } = this.controller;
		const tooltipProps = this.getTooltipProps();
		return ReactDom.createPortal(React.cloneElement(tooltip, tooltipProps), tooltipLayout)
	}
	render() {
		const { step: controllerStep } = this.controller;
		const { step } = this.props;
		const display = step === controllerStep;
		const className = display ? `${prefix}-relativePosition ${prefix}-showElement` : null;
		return <span
			style={{ display: 'inline-block' }}
			ref={(el) => this.el = el}
			className={className}>
			{this.props.children}
			{this.renderTooltip(display)}
		</span>;
	}
}
export default Intro;