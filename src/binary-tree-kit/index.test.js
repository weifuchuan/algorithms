const { rotateLeft, inorderTraversal,rotateRight } =require("./index")

test('rotateLeft', () => {
	const p = {
		key: 2.5,
		value: 0,
		parent: null,
		left: null,
		right: null
	};
	const x = {
		key: 2,
		value: 0,
		parent: null,
		left: null,
		right: null
	};
	const a = {
		key: 1,
		value: 0,
		parent: null,
		left: null,
		right: null
	};
	const y = {
		key: 4,
		value: 0,
		parent: null,
		left: null,
		right: null
	};
	const b = {
		key: 3,
		value: 0,
		parent: null,
		left: null,
		right: null
	};
	const c = {
		key: 5,
		value: 0,
		parent: null,
		left: null,
		right: null
	};
	p.left = x;
	x.parent = p;
	x.left = a;
	a.parent = x;
	x.right = y;
	y.parent = x;
	y.left = b;
	b.parent = y;
	y.right = c;
	c.parent = y;
	rotateLeft(x); 
	const result = [];
	for (let part of inorderTraversal(y)) {
		result.push(part.first);
	}
	expect(result).toEqual([ 1, 2, 3, 4, 5 ]);
});

test('rotateRight', () => {
	const p = {
		key: 2.5,
		value: 0,
		parent: null,
		left: null,
		right: null
	};
	const x = {
		key: 2,
		value: 0,
		parent: null,
		left: null,
		right: null
	};
	const a = {
		key: 1,
		value: 0,
		parent: null,
		left: null,
		right: null
	};
	const y = {
		key: 4,
		value: 0,
		parent: null,
		left: null,
		right: null
	};
	const b = {
		key: 3,
		value: 0,
		parent: null,
		left: null,
		right: null
	};
	const c = {
		key: 5,
		value: 0,
		parent: null,
		left: null,
		right: null
	};
	p.left = y;
	y.parent = p;
	x.left = a;
	a.parent = x;
	x.right = b;
	b.parent = x;
	y.left = x;
	x.parent = y;
	y.right = c;
	c.parent = y;
	rotateRight(y); 
	const result = [];
	for (let part of inorderTraversal(x)) {
		result.push(part.first);
	}
	expect(result).toEqual([ 1, 2, 3, 4, 5 ]);
});
