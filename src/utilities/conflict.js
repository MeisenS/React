export function convertStringToDate(dateString, timeString) {
  const [hours, minutes] = timeString.split(":");
  const date = new Date(`${dateString}T${hours}:${minutes}`);
  return date;
}

export function courseConflict(course1, course2) {
  const days1 = class1.meets.split(" ");
  const days2 = class2.meets.split(" ");

  const c1time = [
    convertStringToDate(class1.start),
    convertStringToDate(class1.end),
  ];
  const c2time = [
    convertStringToDate(class2.start),
    convertStringToDate(class2.end),
  ];

  for (const day1 of days1) {
    for (const day2 of days2) {
      if (day1 === day2) {
        if (doTimeIntervalsOverlap(c1time, c2time)) {
          return true;
        }
      }
    }
  }

  return false;
}

export function courseOverlap(course1, course2) {
  return course1[0] <= course2[1] && course1[1] >= course2[0];
}

export function courseConflicts(course, potentialCourses) {
  for (const Class of potentialCourses) {
    if (doClassesConflict(course, Class)) {
      return true;
    }
  }
  return false;
}
