import { BinaryTreeNode, Part } from '../common-type/index';

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

export function farLeft<K, V, N extends BinaryTreeNode<K, V, any>>(node: N): N {
	while (node.left) node = node.left;
	return node;
}

export function farRight<K, V, N extends BinaryTreeNode<K, V, any>>(node: N): N {
	while (node.right) node = node.right;
	return node;
}

export namespace OrderedTree {
	export function lookup<K, V, N extends BinaryTreeNode<K, V, any>>(node: N | null, k: K): [V, boolean] {
		let p = node;
		while (p) {
			if (p.key === k) {
				return [ p.value, true ];
			}
			if (k < p.key) {
				p = p.left;
			} else {
				p = p.right;
			}
		}
		return [ undefined as any, false ];
	}
}
