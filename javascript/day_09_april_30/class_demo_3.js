class Student {
    roll = 101;
    fName = 'Partha';
    lName = 'Kumar';

    fullName() {
        console.log(this.fName, this.lName);
    }
}
let std = new Student();
std.fullName();