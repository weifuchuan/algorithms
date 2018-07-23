"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComparableBox = (function () {
    function ComparableBox(v) {
        this._value = v;
    }
    Object.defineProperty(ComparableBox.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
        },
        enumerable: true,
        configurable: true
    });
    ComparableBox.prototype.compareTo = function (o) {
        if (this._value === o._value)
            return 0;
        if (this._value < o._value)
            return -1;
        else
            return 1;
    };
    return ComparableBox;
}());
exports.ComparableBox = ComparableBox;
//# sourceMappingURL=index.js.map