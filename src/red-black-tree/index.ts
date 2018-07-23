import { BinaryTreeNode, Comparable } from '../common-type/index';

type Color = 'R' | 'B';

export interface Node<K extends Comparable<K>, V> extends BinaryTreeNode<K, V, Node<K, V>> {
	color: Color;
}

export class RBTree<K extends Comparable<K>, V> {
  private root: Node<K, V> | null = null;
  
}
