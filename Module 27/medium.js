const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    
    getFullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  

  console.log(person.getFullName()); 
  