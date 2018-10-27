// Object Literal
var person = {
    /* property: value*/
    name: "Alvaro",
    lastname: "Garcia",
    birthday: new Date(1998, 9, 29)
}; // JSON (JavaScript Object Notation)

// Example
function createPerson(name, lastname, birthday, dui) {
    return {
        name,
        lastname,
        birthday,
        dui
    }
}

// Get average age
function getAge(birthday) {
  var hoy = new Date();
  var edad = hoy.getFullYear() - birthday.getFullYear();
  var mes = hoy.getMonth() - birthday.getMonth();

  if (mes < 0 || (mes == 0 && hoy.getDate() < birthday.getDate())) {
      edad--;
  }

  return edad;
}

console.log(getAge(person.birthday))
