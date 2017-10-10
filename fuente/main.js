class Dog{


 constructor(age) {

   this.age = age;

 }

 getHumanage() {

   return (this.age * 7);

 }

}

const Stanley = new Dog(10);

console.log(Stanley.getHumanage());