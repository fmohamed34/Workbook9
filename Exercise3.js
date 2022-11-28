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
    getIntro(){
        return "Hi myname is" + this.fullName + ", I am a" +this.jobTitle;
    }

    let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);

    let intro = employee1.getIntro();
    console.log(intro);
    
    employee1.promote("Sr. Graphic Artist", 46.75);
    console.log(`Job title is ${employee1.jobTitle}`);
    console.log(`Pay rate is $${employee1.payRate}`);
