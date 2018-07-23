import {} from '.';
import { BinaryTreeNode } from '../common-type/index';
import { preorderTraversal, inorderTraversal, rotateLeft } from './index';

const tree: BinaryTreeNode<number, number, any> = {
	key: 4,
	value: 0,
	parent: null,
	left: {
		key: 3,
		value: 0,
		parent: null,
		left: {
			key: 1,
			value: 0,
			parent: null,
			left: null,
			right: {
				key: 2,
				value: 0,
				parent: null,
				left: null,
				right: null
			}
		},
		right: null
	},
	right: {
		key: 8,
		value: 0,
		parent: null,
		left: {
			key: 7,
			value: 0,
			parent: null,
			left: null,
			right: null
		},
		right: {
			key: 16,
			value: 0,
			parent: null,
			left: {
				key: 10,
				value: 0,
				parent: null,
				left: {
					key: 9,
					value: 0,
					parent: null,
					left: null,
					right: null
				},
				right: {
					key: 14,
					value: 0,
					parent: null,
					left: null,
					right: null
				}
			},
			right: null
		}
	}
};

test(' preorder traversal ', () => {
	const result = [];
	for (let part of preorderTraversal(tree)) {
		result.push(part.first);
	}
	expect(result).toEqual([ 4, 3, 1, 2, 8, 7, 16, 10, 9, 14 ]);
});

test(' In-order traversal ', () => {
	const result = [];
	for (let part of inorderTraversal(tree)) {
		result.push(part.first);
	}
	expect(result).toEqual([ 1, 2, 3, 4, 7, 8, 9, 10, 14, 16 ]);
});
