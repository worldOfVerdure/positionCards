export const dropDownCreatedFlag = {
  flag: false,
};
// Actual course array needs to be assigned to the faculty object in dataStructures.js
export function CourseCounter(initialFlag, maxCourse, courseCount, coursesSelected, coursesSelectedMarker) {
  this.initialFlag = initialFlag;
  this.maxCourse = maxCourse;
  this.courseCount = courseCount;
  this.coursesSelected = coursesSelected;
  this.coursesSelectedMarker = coursesSelectedMarker;
};
// Keep all properties, save for "majors" starting with capitilization
export const classDirectory = {
  majors: ["Art", "Biology", "Chemistry", "Engineering", "Mathematics"],
  Art: ["Color Theory", "Sculpture", "Digital Design", "Art History"],
  Biology: ["Bio1", "Bio2", "Molecular Biology", "Botany"],
  Chemistry: ["Chem1", "Chem2", "Organic Chemistry", "Inorganic Chemistry"],
  Engineering: ["Physics 1", "Physics 2", "Aerodynamics", "Thermodynamics"],
  Mathematics: ["Algebra", "Linear Algebra", "Calculus", "Partial Differential Equations", "Graph Theory"],
};

export function addClass (majorListItem, courseCounterObj) {
  for (let i=0; i<courseCounterObj.maxCourse; ++i) {
    if (courseCounterObj.coursesSelected[i] === "") {
      courseCounterObj.coursesSelected[i] = majorListItem.innerText;
      courseCounterObj.coursesSelectedMarker[i] = true;
      ++courseCounterObj.courseCount;
      return;
    }
  }
}

export function removeClass (removedClass, courseCounterObj) {
  for (let i=0; i<courseCounterObj.maxCourse; i++) {
    if (courseCounterObj.coursesSelected[i] === removedClass) {
      courseCounterObj.coursesSelected[i] = "";
      courseCounterObj.coursesSelectedMarker[i] = false;
      --courseCounterObj.courseCount;
      return;
    }
  }
}

export function courseAlreadySelected(className, courseCounterObj) {
  for (let i=0; i<courseCounterObj.maxCourse; ++i) {
    if (className === courseCounterObj.coursesSelected[i])
      return true;
  }
  return false;
}
