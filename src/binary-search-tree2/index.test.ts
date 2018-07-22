import { BSTree } from './index';
import { Comparable, ComparableBox } from '../common-type/index';

const tree = new BSTree<ComparableBox>();
tree.insert(new ComparableBox(4), 0);
tree.insert(new ComparableBox(3), 0);
tree.insert(new ComparableBox(1), 0);
tree.insert(new ComparableBox(2), 0);
tree.insert(new ComparableBox(8), 0);
tree.insert(new ComparableBox(7), 0);
tree.insert(new ComparableBox(16), 0);
tree.insert(new ComparableBox(10), 0);
tree.insert(new ComparableBox(9), 0);
tree.insert(new ComparableBox(14), 0);

test('insert function should ok', () => {
	expect(tree.toList().map((p) => p.first.value)).toEqual([ 1, 2, 3, 4, 7, 8, 9, 10, 14, 16 ]);
});

test('should remove ok', () => {
	tree.remove(new ComparableBox(1));
	expect(tree.toList().map((p) => p.first.value)).toEqual([ 2, 3, 4, 7, 8, 9, 10, 14, 16 ]);
	tree.remove(new ComparableBox(2));
	expect(tree.toList().map((p) => p.first.value)).toEqual([ 3, 4, 7, 8, 9, 10, 14, 16 ]);
	tree.remove(new ComparableBox(16));
	expect(tree.toList().map((p) => p.first.value)).toEqual([ 3, 4, 7, 8, 9, 10, 14 ]);
	tree.remove(new ComparableBox(14));
	expect(tree.toList().map((p) => p.first.value)).toEqual([ 3, 4, 7, 8, 9, 10 ]);
	tree.remove(new ComparableBox(14));
	expect(tree.toList().map((p) => p.first.value)).toEqual([ 3, 4, 7, 8, 9, 10 ]);
	tree.remove(new ComparableBox(7));
	expect(tree.toList().map((p) => p.first.value)).toEqual([ 3, 4, 8, 9, 10 ]);
});
