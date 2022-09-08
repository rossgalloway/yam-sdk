"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    static yamAmount(amount) {
        return Math.floor(Number(amount.toString()) / 10 ** 24);
    }
}
exports.default = Utils;
