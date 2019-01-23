import React from 'react';
import renderer from 'react-test-renderer';

import Intro from '../src/Intro';
import {getController} from "../src/Controller";

test('default controller name is "global"', () => {
	const component = renderer.create(<Intro step={1}>
		Facebook
	 </Intro>);
	const control = getController('global');
	expect(control.name).toBe('global');
});

test('custom name', () => {
	const controllerName = 'test'
	const component = renderer.create(<Intro
		name={controllerName}
		step={1}>
		Facebook
	</Intro>);
	const control = getController(controllerName);
	expect(control.name).toBe(controllerName);
})