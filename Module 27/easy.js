var person = {
   firstName: 'Arjona',
   lastName: 'Elezi' ,
age: 16,
getFullName: function(){
    return this.firstName +''+ this.lastName;
}};

console.log(person.getFullName());