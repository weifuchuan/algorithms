"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var tree = new index_1.BSTree();
tree.insert(4, 0);
tree.insert(3, 0);
tree.insert(1, 0);
tree.insert(2, 0);
tree.insert(8, 0);
tree.insert(7, 0);
tree.insert(16, 0);
tree.insert(10, 0);
tree.insert(9, 0);
tree.insert(14, 0);
test('insert function should ok', function () {
    expect(tree.toList().map(function (p) { return p.first; })).toEqual([1, 2, 3, 4, 7, 8, 9, 10, 14, 16]);
});
test('should remove ok', function () {
    tree.remove(1);
    expect(tree.toList().map(function (p) { return p.first; })).toEqual([2, 3, 4, 7, 8, 9, 10, 14, 16]);
    tree.remove(2);
    expect(tree.toList().map(function (p) { return p.first; })).toEqual([3, 4, 7, 8, 9, 10, 14, 16]);
    tree.remove(16);
    expect(tree.toList().map(function (p) { return p.first; })).toEqual([3, 4, 7, 8, 9, 10, 14]);
    tree.remove(14);
    expect(tree.toList().map(function (p) { return p.first; })).toEqual([3, 4, 7, 8, 9, 10]);
    tree.remove(14);
    expect(tree.toList().map(function (p) { return p.first; })).toEqual([3, 4, 7, 8, 9, 10]);
    tree.remove(7);
    expect(tree.toList().map(function (p) { return p.first; })).toEqual([3, 4, 8, 9, 10]);
});
//# sourceMappingURL=index.test.js.map