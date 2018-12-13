import { Doctor } from './Doctor';
import {Transaction } from './transaction';

function showTransaction( txn:Transaction):void{
    console.log(txn.details);
    console.log(txn.trxDate);
}


//Using REST Parameter
function showDoctors(doctorList: Doctor[]):void{

    //Using Arrow Function
    doctorList.forEach(eachDoctor => {
        console.log(eachDoctor.toString())
    });

}

function displayDoctors(...doctors: Doctor[]):void{

    doctors.forEach(eachDoctor => {
        console.log(eachDoctor.toString())
    });
}

const ram =new Doctor(101,'ramesh','ent');
const shyam =new Doctor(102,'shyam','eye');

const docList = [ram,shyam];

showDoctors(docList);
displayDoctors(ram,shyam);

const txl:Transaction = { id: 102,details: 'sugar test', value: 1900, trxDate: new Date()};

showTransaction(txl);


