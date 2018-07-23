// @param <T> the type of objects that this object may be compared to
export interface Comparable<T> {
	/**
   * @param   o the object to be compared.
   * @return  a negative integer, zero, or a positive integer as this object
   *          is less than, equal to, or greater than the specified object.
   */
	compareTo(o: T): number;
}

export class ComparableBox implements Comparable<ComparableBox> {
	private _value: string | number;

	constructor(v: string | number) {
		this._value = v;
	}

	get value(): string | number {
		return this._value;
	}

	set value(v: string | number) {
		this._value = v;
	}

	compareTo(o: ComparableBox): number {
		if (this._value === o._value) return 0;
		if (this._value < o._value) return -1;
		else return 1;
	}
}

export interface Part<First, Second> {
	first: First;
	second: Second;
}

export interface BinaryTreeNode<K, V, N extends BinaryTreeNode<K, V, N>> {
	left: N | null;
	right: N | null;
	parent: N | null;
	key: K;
	value: V;
}
