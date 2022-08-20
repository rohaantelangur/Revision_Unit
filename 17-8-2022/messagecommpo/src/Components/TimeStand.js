export const TimeConver = (timeStand) => {
  var [day1, month, day2, year, time] = timeStand.trim().split(" ");
  var newDate = Date();
  var [currentday1, currentmonth, currentday2, currentyear, currenttime] =
    newDate.trim().split(" ");

  var [oldHr, oldmin, oldSec] = time.trim().split(":");
  var [currentHr, currentmin, currentSec] = currenttime.trim().split(":");

  if (year !== currentyear) {
    let num = Number(currentyear) - Number(year);
    return num + " Year ago";
  } else if (month !== currentmonth) {
    let num =
      Number(MonthStringToNumber(currentmonth)) -
      Number(MonthStringToNumber(month));
    return num + " Month ago";
  } else if (day2 !== currentday2) {
    let num = Number(currentday2) - Number(day2);
    return num + " Days ago";
  } else if (oldHr !== currentHr) {
    let num = oldHr - currentHr;
    return num + " Houres ago";
  } else if (oldmin !== currentmin) {
    let num = oldmin - currentmin;
    return num + " Minutes ago";
  } else if (oldSec !== currentSec) {
    let num = oldSec - currentSec;
    return num + " Seconds ago";
  }
};

const MonthStringToNumber = (monthStr) => {
  switch (monthStr) {
    case "Jan":
      return 1;
    case "Feb":
      return 2;
    case "Mar":
      return 3;
    case "Apr":
      return 4;
    case "May":
      return 5;
    case "Jun":
      return 6;
    case "Jul":
      return 7;
    case "Aug":
      return 8;
    case "Sap":
      return 9;
    case "Oct":
      return 10;
    case "Nov":
      return 11;
    case "Dec":
      return 12;
    default:
      return 0;
  }
};
