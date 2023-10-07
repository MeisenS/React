export const courseConflict = (course1, course2) => {
  if (sameCourse(course1, course2)) {
      return false;
  }
  if (termConflict(course1, course2)) {
      if (dayConflict(course1, course2)) {
          if (timeConflict(course1, course2)) {
              return true;
          }
      }
  }
  return false;
};

export const sameCourse = (course1, course2) => {
  return course1.term === course2.term &&
         course1.number === course2.number &&
         course1.meets === course2.meets &&
         course1.title === course2.title;
};

export const termConflict = (course1, course2) => course1.term === course2.term;

export const dayConflict = (course1, course2) => {
  const course1Day = getDaySet(course1);
  const course2Day = getDaySet(course2);
  for (const day of course1Day) {
      if (course2Day.has(day)) {
          return true
      };
  };
  return false;
};

export const getDayStr = (course) => course.meets.split(' ')[0];

export const getDaySet = (course) => new Set(getDayStr(course).match(/(M|Tu|W|Th|F|Sa|Su)/g));

export const getTimeRange = (course) => {
  if (!course.meets || course.meets.length === 0) {
      return { start: 0, end: 0 };
  }
  const times = course.meets.split(' ')[1];
  const start = timeToMin(times.split('-')[0]);
  const end = timeToMin(times.split('-')[1]);
  return { start, end };
};

export const timeToMin = (time) => {
  const hour = Number(time.split(':')[0]);
  const min = Number(time.split(':')[1]);
  return min + hour * 60;
}

export const timeConflict = (course1, course2) => {
  const course1Time = getTimeRange(course1);
  const course2Time = getTimeRange(course2);
  if (course1Time.start === 0 && course1Time.end === 0) {
      return false;
  }
  if (course2Time.start === 0 && course2Time.end === 0) {
      return false;
  }
  return !(course1Time.end <= course2Time.start || course1Time.start >= course2Time.end);
}