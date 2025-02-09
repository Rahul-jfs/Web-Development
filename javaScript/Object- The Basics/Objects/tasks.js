// Write the code, one line for each action:
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30 am"] = "wake up";
console.log(isEmpty(schedule));

// Write the code to sum all salaries and store in the variable sum

let salary = { John: 100, Ann: 130, Pete: 150 };

let sum = 0;
for (let key in salary) {
  sum += salary[key];
}

console.log(sum);

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
};

let menu = { width: 200, height: 300, title: "My menu" };

multiplyNumeric(menu);
console.log(menu);
