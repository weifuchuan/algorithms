"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var index_1 = require("../binary-tree-kit/index");
var BSTree = (function () {
    function BSTree() {
        this.root = null;
    }
    BSTree.prototype.insert = function (k, v) {
        this.root = insert(this.root, k, v);
    };
    BSTree.prototype.preorderTraversal = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [5, __values(index_1.preorderTraversal(this.root))];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    };
    BSTree.prototype.inorderTraversal = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [5, __values(index_1.inorderTraversal(this.root))];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    };
    BSTree.prototype.postorderTraversal = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [5, __values(index_1.postorderTraversal(this.root))];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    };
    BSTree.prototype.toList = function () {
        var e_1, _a;
        var result = [];
        try {
            for (var _b = __values(this.inorderTraversal()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var p = _c.value;
                result.push(p);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    BSTree.prototype.lookup = function (k) {
        return index_1.OrderedTree.lookup(this.root, k);
    };
    BSTree.prototype.min = function () {
        if (this.root === null) {
            throw 'empty tree';
        }
        var node = index_1.farLeft(this.root);
        return {
            first: node.key,
            second: node.value
        };
    };
    BSTree.prototype.max = function () {
        if (this.root === null) {
            throw 'empty tree';
        }
        var node = index_1.farRight(this.root);
        return {
            first: node.key,
            second: node.value
        };
    };
    BSTree.prototype.remove = function (k) {
        if (this.root === null) {
            return;
        }
        var node = this.root;
        while (node.key !== k) {
            if (k < node.key) {
                if (node.left === null)
                    return;
                else
                    node = node.left;
            }
            else {
                if (node.right === null)
                    return;
                else
                    node = node.right;
            }
        }
        if (node.left !== null && node.right === null) {
            node.left.parent = node.parent;
            if (node.parent) {
                var p = node.parent;
                if (p.left === node) {
                    p.left = node.left;
                }
                else {
                    p.right = node.left;
                }
            }
        }
        else if (node.left === null && node.right !== null) {
            node.right.parent = node.parent;
            if (node.parent) {
                var p = node.parent;
                if (p.left === node) {
                    p.left = node.right;
                }
                else {
                    p.right = node.right;
                }
            }
        }
        else if (node.left === null && node.right === null) {
            if (node.parent) {
                var p = node.parent;
                if (p.left === node) {
                    p.left = null;
                }
                else {
                    p.right = null;
                }
            }
        }
        else {
            var minNodeInRightSubTree = index_1.farLeft(node.right);
            if (minNodeInRightSubTree.parent === node) {
                minNodeInRightSubTree.parent = node.parent;
                minNodeInRightSubTree.left = node.left;
                if (node.parent) {
                    var p = node.parent;
                    if (p.left === node) {
                        p.left = minNodeInRightSubTree;
                    }
                    else {
                        p.right = minNodeInRightSubTree;
                    }
                }
            }
            else {
                var m = __assign({}, minNodeInRightSubTree);
                minNodeInRightSubTree.parent = node.parent;
                minNodeInRightSubTree.left = node.left;
                minNodeInRightSubTree.right = node.right;
                if (node.parent) {
                    var p = node.parent;
                    if (p.left === node) {
                        p.left = minNodeInRightSubTree;
                    }
                    else {
                        p.right = minNodeInRightSubTree;
                    }
                }
                if (m.right) {
                    m.parent.left = m.right;
                    m.right.parent = m.parent;
                }
            }
        }
    };
    return BSTree;
}());
exports.BSTree = BSTree;
function insert(node, k, v) {
    if (node === null) {
        return {
            key: k,
            value: v,
            parent: null,
            left: null,
            right: null
        };
    }
    var root = node;
    var p = root;
    var next = 'self';
    while (true) {
        if (p.key === k) {
            next = 'self';
        }
        else if (k < p.key) {
            next = 'left';
        }
        else {
            next = 'right';
        }
        if (next === 'self') {
            p.value = v;
            break;
        }
        else if (next === 'left') {
            if (p.left === null) {
                p.left = {
                    key: k,
                    value: v,
                    parent: p,
                    left: null,
                    right: null
                };
                break;
            }
            else {
                p = p.left;
            }
        }
        else {
            if (p.right === null) {
                p.right = {
                    key: k,
                    value: v,
                    parent: p,
                    left: null,
                    right: null
                };
                break;
            }
            else {
                p = p.right;
            }
        }
    }
    return root;
}
exports.insert = insert;
//# sourceMappingURL=index.js.map