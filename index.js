// Your code here
// createEmployeeRecord function
function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    };

}
// function createEmployeeRecords
function createEmployeeRecords(arrayOfArrays){
    return arrayOfArrays.map(createEmployeeRecord);
}
// function: createTimeInEvents
function createTimeInEvent(employee, dateStamp){
    const [date, hour] = dateStamp.split(' ');
    employee.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date,
    });
    return employee;
}
// timeOutEvents
function createTimeOutEvent(employee, dateStamp){
    const [date, hour] = dateStamp.split(' ');
    employee.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date,
    });
    return employee;
}
// hoursWorkedOnDate
function hoursWorkedOnDate(employee, date){
    const timeIn = employee.timeInEvents.find(event => event.date === date);
    const timeOut = employee.timeOutEvents.find(event => event.date === date);
    // find worked hours
    return (timeOut.hour - timeIn.hour) / 100;
}
// wages earned on date
function wagesEarnedOnDate(employee, date){
    const workingHours = hoursWorkedOnDate(employee, date);
    return workingHours * employee.payPerHour;
}
// sum of all wages
function allWagesFor(employee){
    const workingDates = employee.timeInEvents.map(event => event.date);
    const sumWages = workingDates.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0);
    return sumWages;
}
function calculatePayroll(employees){
    return employees.reduce((total, employee) => total + allWagesFor(employee), 0);
    
}
