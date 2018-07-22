"use strict";
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
function preorderTraversal(node) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (node === null)
                    return [2];
                return [4, {
                        first: node.key,
                        second: node.value
                    }];
            case 1:
                _a.sent();
                if (!node.left) return [3, 3];
                return [5, __values(preorderTraversal(node.left))];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                if (!node.right) return [3, 5];
                return [5, __values(preorderTraversal(node.right))];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5: return [2];
        }
    });
}
exports.preorderTraversal = preorderTraversal;
function inorderTraversal(node) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (node === null)
                    return [2];
                if (!node.left) return [3, 2];
                return [5, __values(inorderTraversal(node.left))];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [4, {
                    first: node.key,
                    second: node.value
                }];
            case 3:
                _a.sent();
                if (!node.right) return [3, 5];
                return [5, __values(inorderTraversal(node.right))];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5: return [2];
        }
    });
}
exports.inorderTraversal = inorderTraversal;
function postorderTraversal(node) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (node === null)
                    return [2];
                if (!node.left) return [3, 2];
                return [5, __values(postorderTraversal(node.left))];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                if (!node.right) return [3, 4];
                return [5, __values(postorderTraversal(node.right))];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [4, {
                    first: node.key,
                    second: node.value
                }];
            case 5:
                _a.sent();
                return [2];
        }
    });
}
exports.postorderTraversal = postorderTraversal;
function farLeft(node) {
    while (node.left)
        node = node.left;
    return node;
}
exports.farLeft = farLeft;
function farRight(node) {
    while (node.right)
        node = node.right;
    return node;
}
exports.farRight = farRight;
var OrderedTree;
(function (OrderedTree) {
    function lookup(node, k) {
        var p = node;
        while (p) {
            if (p.key === k) {
                return [p.value, true];
            }
            if (k < p.key) {
                p = p.left;
            }
            else {
                p = p.right;
            }
        }
        return [undefined, false];
    }
    OrderedTree.lookup = lookup;
})(OrderedTree = exports.OrderedTree || (exports.OrderedTree = {}));
//# sourceMappingURL=index.js.map