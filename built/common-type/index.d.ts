export interface Comparable<T> {
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
