// Write your solution in this file!
const employee = {
    name: "Stanslous",
    streetAddress: "1034",
}

console.log(employee);

function updateEmployeeWithKeyAndValue(obj,key,value) {
    return {...obj,[key]:value,};
};

const newEmployeeDetails = updateEmployeeWithKeyAndValue(employee,"name","Muindi");

console.log(newEmployeeDetails);

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]= value;
    return obj;
};

const secondEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress","5369");

console.log(secondEmployee);

function deleteFromEmployeeByKey(obj,key,value){
    return {...obj,[key]:value,};
};

const updated = deleteFromEmployeeByKey(employee,"name","Mutala");

delete updated.name;

console.log(updated);


function destructivelyDeleteFromEmployeeByKey(obj,key){
    let newEmployee = employee;
    delete newEmployee.name;
    delete newEmployee.streetAddress;
    return newEmployee;
};

const final = destructivelyDeleteFromEmployeeByKey(employee,"name");

delete final.streetAddress;

console.log(final);



