import { Part, BinaryTreeNode, Comparable } from '../common-type/index';
export interface Node<K extends Comparable<K>, V = any> extends BinaryTreeNode<K, V, Node<K, V>> {
    parent: Node<K, V> | null;
}
export declare class BSTree<K extends Comparable<K>, V = any> {
    private root;
    constructor();
    insert(k: K, v: V): void;
    preorderTraversal(): IterableIterator<Part<K, V>>;
    inorderTraversal(): IterableIterator<Part<K, V>>;
    postorderTraversal(): IterableIterator<Part<K, V>>;
    toList(): Array<Part<K, V>>;
    lookup(k: K): [V, boolean];
    min(): Part<K, V>;
    max(): Part<K, V>;
    remove(k: K): void;
}
export declare function insert<K extends Comparable<K>, V = any>(node: Node<K, V> | null, k: K, v: V): Node<K, V>;
