function Person (name, memberStatus, id, email) {
  this.name = name;
  this.memberType = memberStatus;
  this.id = id;
  this.email = email;
 }
 
function Professor (classesTaught, salary, researchStatus) {
  this.classesTaught = classesTaught; //Array passed from event function.
  this.salary = salary;
  this.researchStatus = researchStatus;
}
 
function createMemberWrapper (memberTypeConstructor, name, memberType, id, email, jobInfo, moneyInfo, statusInfo) {
  const tempPerson = new Person(name, memberType, id, email);
  const tempCollegeMember = new memberTypeConstructor(jobInfo, moneyInfo, statusInfo);
   
  return Object.setPrototypeOf(tempCollegeMember, tempPerson);
}
