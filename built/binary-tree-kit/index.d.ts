import { BinaryTreeNode, Part, Comparable } from '../common-type/index';
export declare function preorderTraversal<K, V>(node: BinaryTreeNode<K, V, any> | null): IterableIterator<Part<K, V>>;
export declare function inorderTraversal<K, V>(node: BinaryTreeNode<K, V, any> | null): IterableIterator<Part<K, V>>;
export declare function postorderTraversal<K, V>(node: BinaryTreeNode<K, V, any> | null): IterableIterator<Part<K, V>>;
export declare function farLeft<K, V, N extends BinaryTreeNode<K, V, any>>(node: N): N;
export declare function farRight<K, V, N extends BinaryTreeNode<K, V, any>>(node: N): N;
export declare namespace OrderedTree {
    function lookup<K, V, N extends BinaryTreeNode<K, V, any>>(node: N | null, k: K): [V, boolean];
    function lookup2<K extends Comparable<K>, V, N extends BinaryTreeNode<K, V, any>>(node: N | null, k: K): [V, boolean];
}
