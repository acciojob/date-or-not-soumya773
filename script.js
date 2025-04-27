var isDate = function (input) {
  // Check if it's a Date object
  if (Object.prototype.toString.call(input) === "[object Date]") {
    return !isNaN(input.getTime());
  }

  // If it's a string or number, try converting it to a Date
  if (typeof input === "string" || typeof input === "number") {
    const date = new Date(input);
    return !isNaN(date.getTime());
  }

  // Otherwise, it's not a valid date
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
