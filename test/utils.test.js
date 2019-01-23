import * as utils from '../src/utils';

test('findParentDomHasZ test', () => {
	document.body.innerHTML = `
		<div>
			<span></span>
		</div>
	`
	const testDom = document.querySelector('span');
	expect(utils.findParentDomHasZ(testDom).length).toBe(3);
})

test('addFixClass test', () =>{
	const list = new Array(10).fill('t').map(()=> {
		return {
			className: `${Math.random()}`
		}
	});
	expect(utils
		.addFixClass(list, 'test')
		.filter(v=> v.className.match(/ test$/))
		.length === list.length)
		.toBe(true)
})

test('removeFixClass', () =>{
	const list = new Array(10).fill('t').map(()=> {
		return {
			className: `${Math.random()}`
		}
	});
	utils
		.addFixClass(list, 'test');
	expect(
		utils.removeFixClass(list, 'test')
			.filter(v=> v.className.match(/ test$/) === null)
		.length === list.length)
		.toBe(true)

})