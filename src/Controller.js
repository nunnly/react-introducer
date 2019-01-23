import DA from 'dom-align'

import {
	prefix
} from './config';
import placements from "./placements";
const IntroMap = {}

const BACKGROUND_LAYOUT = `${prefix}-intro-overlay`;
const HELP_LAYOUT = `${prefix}-intro-helperLayout`;
const TOOLTIP_LAYOUT = `${prefix}-intro-tooltipReferenceLayer`;

class Controller {
	constructor(name, intro) {
		this.name = name;
		this.step = 0; // The controller current step;
		this.prevIntro = null; // previous intro
		this.currentIntro = null; // current Intro
		this.inited = false; // The controller was loaded in the document;
		this.list = [intro]; // intro list
		this.warper = null; // append wrap dom
	}
	// return Intros count
	get count() {
		return this.list.length;
	}
	// add Intro
	addIntro(intro) {
		this.list.push(intro);
	}
	// update All Intro
	updateAllSteps() {
		this.list.forEach(v => {
			v.setState({});
		})
	}

	// update previous Intro and 
	updateSteps(currentIntro) {
		const {
			prevIntro
		} = this;
		if (prevIntro !== null) {
			prevIntro.unsetActive({})
		}
		this.prevIntro = currentIntro;
		currentIntro.setActive({});
	}

	// go to step by Intro
	goToStep = (intro = 0) => {
		if (intro === 0) {
			this.end();
			return;
		}
		const {
			step
		} = intro;
		this.step = step;
		this.updateSteps(intro);
		this.setLayoutProps(intro);
		// this.step = step.step;
		// step.component.el.scrollIntoView()
		// this.list.forEach(v=> v.component.setState({}));
	}

	// set Intros end
	end = () => {
		this.setp = 0;
		this.updateAllSteps();
		this.destroyLayout();
	}

	// destory controller layout
	destroyLayout() {
		this.backgroundLayout.remove();
		this.tooltipLayout.remove();
		this.helplerLayout.remove();
		this.inited = false;
	}
	// go to step by Intro step
	goToStepNumber = (number) => {
		const intro = this.list.find(v => v.step === number);
		this.goToStep(intro);
	}

	// create layout dom
	createDom() {
		// 初始化背景部分
		this.backgroundLayout = document.createElement('div');
		this.backgroundLayout.className = BACKGROUND_LAYOUT;
		this.backgroundLayout.style = {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			position: 'fixed',
			opacity: 0.8
		}
		// 初始化弹窗
		this.tooltipLayout = document.createElement('div');
		this.tooltipLayout.className = TOOLTIP_LAYOUT;

		//初始化选区
		this.helplerLayout = document.createElement('div');
		this.helplerLayout.className = HELP_LAYOUT
	}

	// get Intro child react
	getStepRect(dom) {
		if (dom) {
			const obj = dom.getBoundingClientRect();
			const {
				scrollY,
				scrollX
			} = window;
			const {
				bottom,
				height,
				left,
				right,
				top,
				width
			} = obj;
			const attr = {
				bottom,
				height,
				left: left + scrollX,
				right,
				top: top + scrollY,
				width
			};
			Object.keys(attr).forEach(v => {
				attr[v] = `${attr[v]}px`
			});
			return attr;
		} else {
			console.log('error');
		}
	}

	getTooltipProps(hide) {
		if (hide) {
			return {
				visibility: 'hidden'
			}
		}
		return {
			visibility: 'visible',
			background: '#fff'
		}
	}

	// initialize Intro stage layout
	initLayout() {
		if (this.inited === true) return;
		this.createDom();
		const idName = `${prefix}-wrap`
		let target = document.getElementById(idName);
		if (target === null) {
			target = document.createElement('div')
			target.id = idName;
			document.body.appendChild(target);
		}
		this.wraper = target;
		target.appendChild(this.backgroundLayout);
		target.appendChild(this.tooltipLayout);
		target.appendChild(this.helplerLayout);
		this.helplerLayout.addEventListener('transitionstart', function () {
			console.log('transitionrun 1');
		});
		this.helplerLayout.addEventListener('transitionend', (e) => {
			if (e.propertyName === 'top') {
				const tooltipProps = this.getTooltipProps();
				this.setDomStyle(this.tooltipLayout, tooltipProps);
			}
		});
		this.inited = true;
	}


	setLayoutProps(intro) {
		const helperProps = this.getStepRect(intro.el);
		this.setDomStyle(this.helplerLayout, helperProps);
		const bgProps = this.getBackgroundLayoutProps();
		this.setDomStyle(this.backgroundLayout, bgProps);
		const hide = this.getTooltipProps(!this.firstLoad);
		this.setDomStyle(this.tooltipLayout, hide);
		const {
			placement
		} = intro.props;
		DA(this.tooltipLayout, intro.el, placements[placement]);
	}

	// start 
	start = () => {
		this.firstLoad = true;
		const target = this.list.sort((a, b) => a.step - b.step)[0];
		this.initLayout()
		this.goToStep(target);
		this.firstLoad = false;
	}

	// map style object and set dom style
	setDomStyle(dom, style) {
		Object.keys(style).forEach(v => {
			dom.style[v] = style[v];
		})
	}
	getBackgroundLayoutProps() {
		return {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			position: 'fixed',
			opacity: 0.8
		}
	}

	// go to next Intro
	nextStep = () => {
		const {
			step
		} = this;
		if (this.count !== step) {
			this.goToStepNumber(step + 1)
		}
	}

	// goto previous Into
	prevStep = () => {
		const {
			step
		} = this;
		if (1 !== step) {
			this.goToStepNumber(step - 1)
		}
	}
	oncomplete(providedCallback) {}
	onexit(providedCallback) {}
	onbeforeexit(providedCallback) {}
	onchange(providedCallback) {}
	onbeforechange(providedCallback) {}
	onafterchange(providedCallback) {}
}

// create a new Controller by Intro name props;
function newController(intro) {
	const {
		name
	} = intro;
	if (IntroMap[name]) {
		IntroMap[name].addIntro(intro);
		return IntroMap[name];
	} else {
		const nc = new Controller(name, intro)
		IntroMap[name] = nc;
		return nc;
	}
}

// return a controller by name, default name global;
function getController(name = 'global') {
	if (IntroMap[name] === undefined) {
		throw new Error(`name ${name} Controller not found`);
	}
	return IntroMap[name];
}

export default Controller;
export {
	Controller,
	newController,
	IntroMap,
	getController
}