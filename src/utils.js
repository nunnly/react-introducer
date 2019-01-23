function findParentDomHasZ(target) {
	const list = [];
	while (target !== null) {
		target = target.parentElement;
		if (target === null) break;
		try {
			if (target.computedStyleMap().has('z-index')) {
				list.push(target);
			}
		} catch (e) {
			list.push(target);
		}
	}
	return list
}

function addFixClass(list = [], className) {
	list.forEach(v => {
		v.className = `${v.className} ${className}`;
	});
	return list;
}

function removeFixClass(list = [], className) {
	list.forEach(v => {
		v.className = v.className.replace(className, '')
	});
	return list
}

export {
	findParentDomHasZ,
	addFixClass,
	removeFixClass
}