export interface Comparable<T> {
    compareTo(o: T): number;
}
export declare class ComparableBox implements Comparable<ComparableBox> {
    private _value;
    constructor(v: string | number);
    value: string | number;
    compareTo(o: ComparableBox): number;
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
