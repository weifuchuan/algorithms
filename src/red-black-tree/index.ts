import { BinaryTreeNode, Comparable } from '../common-type/index';

type Color = 'R' | 'B';

export interface Node<K extends Comparable<K>, V> extends BinaryTreeNode<K, V, Node<K, V>> {
	color: Color;
}

/**
 * BSTree is the class of binary search tree
 * @param <K> type K is key type
 * @param <V> type V is value type
 */
export class RBTree<K extends Comparable<K>, V> {
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
  
  
}
