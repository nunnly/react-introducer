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
			console.error(e);
		}
	}
	return list
}

function addFixClass(list = [], className) {
	list.forEach(v => {
		v.className = `${v.className} ${className}`;
	});
}

function removeFixClass(list = [], className) {
	list.forEach(v => {
		v.className = v.className.replace(className, '')
	})
}

export {
	findParentDomHasZ,
	addFixClass,
	removeFixClass
}