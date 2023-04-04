/* Your Code Here */
function createEmployeeRecord(employee){
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
        }
}
function createEmployeeRecords(employeeRecord){
    const employeeRecords = [];
    for(let employee of employeeRecord){
        employeeRecords.push(createEmployeeRecord(employee))
    }
    return employeeRecords;
}
function createTimeInEvent (date){
    //dateStamp("2014-02-28")

    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(date.substring(11)),
        date: date.substring(0, 10)
    })
   return this;
}
function createTimeOutEvent (date){
    //dateStamp("2014-02-28")
  //  let [date, hour] = dateStamp.split('')

    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(date.substring(11)),
        date: date.substring(0, 10)
    })
   return this;
}

let hoursWorkedOnDate = function(workOnDate){
    let timeInEvent = this.timeInEvents.find(function(e){
        return e.date === workOnDate
    })

    let timeOutEvent = this.timeOutEvents.find(function(e){
        return e.date === workOnDate
    })

    return (timeOutEvent.hour - timeInEvent.hour) /100
}


let wagesEarnedOnDate = function(earnedOnDate){
    let wagesOnDate = hoursWorkedOnDate.call(this, earnedOnDate)
        *this.payPerHour
    return parseFloat(wagesOnDate.toString())
}


let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(record){
    return record.firstName === firstName
  })
}
// calculatePayrol returns array employees and the pay owed
var calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(cost, records1){
        return cost + allWagesFor.call(records1)
    }, 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
}

