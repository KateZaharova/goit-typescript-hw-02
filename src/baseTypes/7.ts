/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek{
  Mon="MONDAY", 
  Tue="TUESDAY",
  Wed="WEDNSDAY",
  Thu="THUSDAY",
  Fry="FRIDAY",
  Sat="SATURDAY",
  Sun="SUNDAY",
};

function isWeekend(day:string) {
  if (day === DaysOfWeek.Sat || day === DaysOfWeek.Sun) {
    return true;
  } else false;
};

isWeekend("SUNDAY");

export {};
