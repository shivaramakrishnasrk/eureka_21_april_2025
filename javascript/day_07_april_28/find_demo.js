let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];

// find the first female employee in the list
let first_female_emp = employees.find((emp) => emp.gender === 'female');
console.log('First Female Employee:: ', first_female_emp);

// find the index where the first female employee present
let first_female_emp_ind = employees.findIndex((emp) => emp.gender === 'female');
console.log('First Female Employee Index:: ', first_female_emp_ind);

// print the last female employee in the list
let last_female_emp = employees.findLast((emp) => emp.gender === 'female');
console.log('Last Female Employee:: ', last_female_emp);

// find the index where the last female employee present
let last_female_emp_ind = employees.findLastIndex((emp) => emp.gender === 'female');
console.log('last Female Employee Index:: ', last_female_emp_ind);

// find all the female employees (find all - filter())
let all_female_emps = employees.filter((emp) => emp.gender === 'female');
console.log('all Female Employee:: ', all_female_emps);