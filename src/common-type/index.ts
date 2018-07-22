// @param <T> the type of objects that this object may be compared to
export interface Comparable<T> {
	/**
   * @param   o the object to be compared.
   * @return  a negative integer, zero, or a positive integer as this object
   *          is less than, equal to, or greater than the specified object.
   */
	compareTo(o: T): number;
}

export interface Part<First, Second> {
	first: First;
	second: Second;
}

export interface BinaryTreeNode<K, V, Leaf extends BinaryTreeNode<K, V, Leaf>> {
	left: Leaf | null;
	right: Leaf | null;
	key: K;
	value: V;
}
