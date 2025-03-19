const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
    
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
 
  console.log(person.getFullName()); 
  