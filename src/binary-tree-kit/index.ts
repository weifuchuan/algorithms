import { BinaryTreeNode, Part, Comparable } from '../common-type/index';

/**
 * preorder traversal for the node.
 * root -> left tree -> right tree
 */
export function* preorderTraversal<K, V>(node: BinaryTreeNode<K, V, any> | null): IterableIterator<Part<K, V>> {
	if (node === null) return;
	yield {
		first: node.key,
		second: node.value
	};
	if (node.left) yield* preorderTraversal(node.left as any);
	if (node.right) yield* preorderTraversal(node.right as any);
}

/**
 * In-order traversal for the node
 * left tree -> root -> right tree
 */
export function* inorderTraversal<K, V>(node: BinaryTreeNode<K, V, any> | null): IterableIterator<Part<K, V>> {
	if (node === null) return;
	if (node.left) yield* inorderTraversal(node.left as any);
	yield {
		first: node.key,
		second: node.value
	};
	if (node.right) yield* inorderTraversal(node.right as any);
}

/**
 * Post-order traversal for the node
 * left tree -> right tree -> root 
 */
export function* postorderTraversal<K, V>(node: BinaryTreeNode<K, V, any> | null): IterableIterator<Part<K, V>> {
	if (node === null) return;
	if (node.left) yield* postorderTraversal(node.left as any);
	if (node.right) yield* postorderTraversal(node.right as any);
	yield {
		first: node.key,
		second: node.value
	};
}

export function farLeft<K, V, N extends BinaryTreeNode<K, V, N>>(node: N): N {
	while (node.left) node = node.left;
	return node;
}

export function farRight<K, V, N extends BinaryTreeNode<K, V, N>>(node: N): N {
	while (node.right) node = node.right;
	return node;
}

export function rotateLeft<K, V, N extends BinaryTreeNode<K, V, N>>(node: N): N {
	if (node.right === null) throw 'no right sub tree';
	const x = node;
	const p = x.parent;
	const a = x.left;
	const y = node.right!;
	const b = y.left;
	const c = y.right;
	if (p) {
		if (p.left === x) {
			p.left = y;
		} else {
			p.right = y;
		}
	}
	y.parent = p;
	x.parent = y;
	y.left = x;
	x.right = b;
	if (b) b.parent = x;
	return y;
}

export function rotateRight<K, V, N extends BinaryTreeNode<K, V, N>>(node: N): N {
	if (node.left === null) throw 'no left sub tree';
	const y = node;
	const p = y.parent;
	const c = y.right;
	const x = y.left!;
	const a = x.left;
	const b = x.right;
	if (p) {
		if (p.left === y) {
			p.left = x;
		} else {
			p.right = x;
		}
	}
	x.parent = p;
	y.parent = x;
	x.right = y;
	y.left = b;
	if (b) b.parent = y;
	return x;
}

	export function lookup<K, V, N extends BinaryTreeNode<K, V, N>>(
		node: N | null,
		k: K,
		comparator: (a: K, b: K) => number = (a, b) => {
			if (a === b) return 0;
			if (a < b) return -1;
			else return 1;
		}
	): [V, boolean] {
		let p = node;
		while (p) {
			const c = comparator(k,p.key)
			if (c===0) {
				return [ p.value, true ];
			}
			if (c<0) {
				p = p.left;
			} else {
				p = p.right;
			}
		}
		return [ undefined as any, false ];
	}
