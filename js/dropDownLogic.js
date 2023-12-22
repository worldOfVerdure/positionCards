export const dropDownCreatedFlag = {
  flag: false,
};

export const courseCounter = {
  initialFlag: true,
  maxCourse: 6,
  courseCount: 0,
  coursesSelected: [],
  coursesSelectedMarker: [],
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

export function addClass (majorListItem) {
  for (let i=0; i<courseCounter.maxCourse; ++i) {
    if (courseCounter.coursesSelected[i] === "") {
      courseCounter.coursesSelected[i] = majorListItem.innerText;
      courseCounter.coursesSelectedMarker[i] = true;
      ++courseCounter.courseCount;
      return;
    }
  }
}

export function removeClass (removedClass) {
  for (let i=0; i<courseCounter.maxCourse; i++) {
    if (courseCounter.coursesSelected[i] === removedClass) {
      courseCounter.coursesSelected[i] = "";
      courseCounter.coursesSelectedMarker[i] = false;
      --courseCounter.courseCount;
      return;
    }
  }
}

export function courseAlreadySelected(className) {
  for (let i=0; i<courseCounter.maxCourse; ++i) {
    if (className === courseCounter.coursesSelected[i])
      return true;
  }
  return false;
}
