"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Doctor = /** @class */ (function () {
    function Doctor(id, name, specialization) {
        this.id = id;
        this.name = name;
        this.specialization = specialization;
    }
    Doctor.prototype.toString = function () {
        return this.id + "," + this.name + ", " + this.specialization;
    };
    return Doctor;
}());
exports.Doctor = Doctor;
