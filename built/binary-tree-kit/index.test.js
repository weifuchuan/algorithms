"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var tree = {
    key: 4,
    value: 0,
    left: {
        key: 3,
        value: 0,
        left: {
            key: 1,
            value: 0,
            left: null,
            right: {
                key: 2,
                value: 0,
                left: null,
                right: null
            }
        },
        right: null
    },
    right: {
        key: 8,
        value: 0,
        left: {
            key: 7,
            value: 0,
            left: null,
            right: null
        },
        right: {
            key: 16,
            value: 0,
            left: {
                key: 10,
                value: 0,
                left: {
                    key: 9,
                    value: 0,
                    left: null,
                    right: null
                },
                right: {
                    key: 14,
                    value: 0,
                    left: null,
                    right: null
                }
            },
            right: null
        }
    }
};
test(' preorder traversal ', function () {
    var e_1, _a;
    var result = [];
    try {
        for (var _b = __values(index_1.preorderTraversal(tree)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var part = _c.value;
            result.push(part.first);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    expect(result).toEqual([4, 3, 1, 2, 8, 7, 16, 10, 9, 14]);
});
test(' In-order traversal ', function () {
    var e_2, _a;
    var result = [];
    try {
        for (var _b = __values(index_1.inorderTraversal(tree)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var part = _c.value;
            result.push(part.first);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    expect(result).toEqual([1, 2, 3, 4, 7, 8, 9, 10, 14, 16]);
});
//# sourceMappingURL=index.test.js.map