import { Part, BinaryTreeNode } from '../common-type/index';
import {
	preorderTraversal,
	inorderTraversal,
	postorderTraversal,
	farLeft,
	farRight,
	lookup
} from '../binary-tree-kit/index';

/**
 * Node is the node of binary tree. 
 * @param <K> type K is key type
 * @param <V> type V is value type
 */
export interface Node<K, V = any> extends BinaryTreeNode<K, V, Node<K, V>> {}

/**
 * BSTree is the class of binary search tree
 * @param <K> type K is key type
 * @param <V> type V is value type
 */
export class BSTree<K, V = any> {
	private root: Node<K, V> | null = null;
	private comparator: (a: K, b: K) => number;

	/**
	 * 
	 * @param comparator Comparator is to comparate two key, which return a negative integer, zero, or a positive integer as this object is less than, equal to, or greater than the specified object. By default, use < and ===. 
	 */
	constructor(
		comparator: (a: K, b: K) => number = (a, b) => {
			if (a === b) return 0;
			if (a < b) return -1;
			else return 1;
		}
	) {
		this.comparator = comparator;
	}

	// insert a part of <key, value> into this tree
	insert(k: K, v: V): BSTree<K, V> {
		this.root = insert(this.root, k, v, this.comparator);
		return this;
	}

	/**
	 * Search value for key
	 * @param k the key
	 * @returns [value, ok] if ok == true then value was exists in the tree
	 */
	lookup(k: K): [V, boolean] {
		return lookup(this.root, k, this.comparator);
	}

	/**
	 * Remove node from tree by key.
	 * @param k 
	 */
	remove(k: K): BSTree<K, V> {
		if (this.root === null) {
			return this;
		}
		let node = this.root!;
		let c = this.comparator(k, node.key);
		while (c !== 0) {
			if (c < 0) {
				if (node.left === null) return this;
				else node = node.left!;
			} else {
				if (node.right === null) return this;
				else node = node.right!;
			}
			c = this.comparator(k, node.key);
		}
		if (node.left !== null && node.right === null) {
			node.left.parent = node.parent;
			if (node.parent) {
				let p = node.parent;
				if (p.left === node) {
					p.left = node.left;
				} else {
					p.right = node.left;
				}
			}
		} else if (node.left === null && node.right !== null) {
			node.right.parent = node.parent;
			if (node.parent) {
				let p = node.parent;
				if (p.left === node) {
					p.left = node.right;
				} else {
					p.right = node.right;
				}
			}
		} else if (node.left === null && node.right === null) {
			if (node.parent) {
				let p = node.parent;
				if (p.left === node) {
					p.left = null;
				} else {
					p.right = null;
				}
			}
		} else {
			const minNodeInRightSubTree = farLeft(node.right!);
			if (minNodeInRightSubTree.parent === node) {
				minNodeInRightSubTree.parent = node.parent;
				minNodeInRightSubTree.left = node.left;
				if (node.parent) {
					let p = node.parent;
					if (p.left === node) {
						p.left = minNodeInRightSubTree;
					} else {
						p.right = minNodeInRightSubTree;
					}
				}
			} else {
				const m = { ...minNodeInRightSubTree };
				minNodeInRightSubTree.parent = node.parent;
				minNodeInRightSubTree.left = node.left;
				minNodeInRightSubTree.right = node.right;
				if (node.parent) {
					let p = node.parent;
					if (p.left === node) {
						p.left = minNodeInRightSubTree;
					} else {
						p.right = minNodeInRightSubTree;
					}
				}
				if (m.right) {
					m.parent!.left = m.right;
					m.right.parent = m.parent;
				}
			}
		}
		return this;
	}

	/**
	 * preorder traversal for this tree.
	 * root -> left tree -> right tree
	 */
	*preorderTraversal(): IterableIterator<Part<K, V>> {
		yield* preorderTraversal(this.root);
	}

	/**
	 * In-order traversal for the node
	 * left tree -> root -> right tree
	 */
	*inorderTraversal(): IterableIterator<Part<K, V>> {
		yield* inorderTraversal(this.root);
	}

	/**
	 * Post-order traversal for the node
	 * left tree -> right tree -> root 
	 */
	*postorderTraversal(): IterableIterator<Part<K, V>> {
		yield* postorderTraversal(this.root);
	}

	/**
	 * transform to array
	 * @returns ordered list by key
	 */
	toList(): Array<Part<K, V>> {
		const result = [];
		for (let p of this.inorderTraversal()) result.push(p);
		return result;
	}

	/**
	 * Transform tree to js object { [key]: value }, expect key type is string or number.
	 */
	toJS(): any {
		const obj: any = {};
		for (let p of this.inorderTraversal()) obj[p.first] = p.second;
		return obj;
	}

	/**
	 * Get <key, value> by min key
	 */
	min(): Part<K, V> {
		if (this.root === null) {
			throw 'empty tree';
		}
		const node = farLeft(this.root!);
		return {
			first: node.key,
			second: node.value
		};
	}

	/**
	 * Get <key, value> by max key
	 */
	max(): Part<K, V> {
		if (this.root === null) {
			throw 'empty tree';
		}
		const node = farRight(this.root!);
		return {
			first: node.key,
			second: node.value
		};
	}
}

export function insert<K, V = any>(
	node: Node<K, V> | null,
	k: K,
	v: V,
	comparator: (a: K, b: K) => number = (a, b) => {
		if (a === b) return 0;
		if (a < b) return -1;
		else return 1;
	}
): Node<K, V> {
	if (node === null) {
		return {
			key: k,
			value: v,
			parent: null,
			left: null,
			right: null
		};
	}
	const root = node!;
	let p = root;
	let next: 'left' | 'self' | 'right' = 'self';
	while (true) {
		const c = comparator(k, p.key);
		if (c === 0) {
			next = 'self';
		} else if (c < 0) {
			next = 'left';
		} else {
			next = 'right';
		}
		if (next === 'self') {
			p.value = v;
			break;
		} else if (next === 'left') {
			if (p.left === null) {
				p.left = {
					key: k,
					value: v,
					parent: p,
					left: null,
					right: null
				};
				break;
			} else {
				p = p.left;
			}
		} else {
			if (p.right === null) {
				p.right = {
					key: k,
					value: v,
					parent: p,
					left: null,
					right: null
				};
				break;
			} else {
				p = p.right;
			}
		}
	}
	return root;
}
