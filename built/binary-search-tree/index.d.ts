import { Part, BinaryTreeNode } from '../common-type/index';
export declare type Key = number | string;
export interface Node<V = any> extends BinaryTreeNode<Key, V, Node<V>> {
    parent: Node<V> | null;
}
export declare class BSTree<V = any> {
    private root;
    constructor();
    insert(k: Key, v: V): void;
    preorderTraversal(): IterableIterator<Part<Key, V>>;
    inorderTraversal(): IterableIterator<Part<Key, V>>;
    postorderTraversal(): IterableIterator<Part<Key, V>>;
    toList(): Array<Part<Key, V>>;
    lookup(k: Key): [V, boolean];
    min(): Part<Key, V>;
    max(): Part<Key, V>;
    remove(k: Key): void;
}
export declare function insert<V = any>(node: Node<V> | null, k: Key, v: V): Node<V>;
