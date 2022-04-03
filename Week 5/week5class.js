//OBJECTS

class Employee {
    constructor(employeeID, firstName, lastName, SSN, email, salary) {
        this.employeeID = employeeID;
        this.employeeFristName = firstName;
        this.employeeLastName = lastName;
        this.employeeSSN = SSN;
        this.employeeEmail = email;
        this.annualSalary = salary;
    }
    calculateVacationTime(years) {
        if (years <= 2) {
            return 'two weeks vacation time'
        } else if (years <= 5) {
            return 'three weeks vacation time'
        } else {
            return '4 weeks vacation time'
        }
    }
    calculateBonus() {
        return `$${this.annualSalary * .10} is ${this.firstName}'s bonus`
    }
}

//these are the instances of the Employee class
const employee1 = new Employee('0012', 'Joe', 'Smith', '111-11-1111', 'joesmith@email.com', 55000);
const employee2 = new Employee('0013', 'Sally', 'Jane', '222-11-1111', 'sallyjane@email.com', 600000);
const employee3 = new Employee('0014', 'jame', 'gumb', '333-11-1111', 45000);
/* const employee4 = new Employee(
    prompt('Enter employee id: '),
    prompt('Enter Employee first name: '),
    prompt('Enter employee last name: '),
    prompt('Enter employee SSN: ')
) */

console.log(employee1);
console.log(employee2);

console.log(employee1.calculateBonus());
