class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
    }

    get fullName() {
        return this.firstName + "" + this.lastName;
    }
    }
    Promote(newJobTitle, newPayRate){
        this.jobTitle = newJobtitle;
        this.payRate = newPayRate;
    }
  
    let employee1 = new Employee(1, "Ian", "Austin", "Graphic Artist". 42.50);

    employee1.Promote("Sr, Graphic Artist", 46.75);
    console.log('Job title is $ {employee1.jobTitle}');
    console.log('Pay rate is $${employee1.payRate}');
