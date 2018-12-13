"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Doctor_1 = require("./Doctor");
function showTransaction(txn) {
    console.log(txn.details);
    console.log(txn.trxDate);
}
//Using REST Parameter
function showDoctors(doctorList) {
    //Using Arrow Function
    doctorList.forEach(function (eachDoctor) {
        console.log(eachDoctor.toString());
    });
}
function displayDoctors() {
    var doctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        doctors[_i] = arguments[_i];
    }
    doctors.forEach(function (eachDoctor) {
        console.log(eachDoctor.toString());
    });
}
var ram = new Doctor_1.Doctor(101, 'ramesh', 'ent');
var shyam = new Doctor_1.Doctor(102, 'shyam', 'eye');
var docList = [ram, shyam];
showDoctors(docList);
displayDoctors(ram, shyam);
var txl = { id: 102, details: 'sugar test', value: 1900, trxDate: new Date() };
showTransaction(txl);
