// 1. екранування це зворотні слеш за допомогою якого ми можемо записувати різні спецсимволи
// 2. function declaration - може бути викликана в будь-якому місці колду
// function expressin - може бути викликана після оголошення функції
// метод - функція всередині обєкту
// стрілочна функція 
// 3. hoisting це по суті різниця між оголошенням функції function declaration та function expression
// коли браузер читає код він шукає усі функції і змінні які були оголошені і піднімає змінні наверх функції

function createNewUser() {
  firstName = prompt('Your first name')
  lastName = prompt('Your last name')
  birthday = prompt('Your birthday in the format dd.mm.yyyy:')
  while (!isNaN(firstName) || !isNaN(lastName) || !isNaN(birthday)){
      firstName = prompt('Your first name', firstName)
      lastName = prompt('Your last name', lastName)
      birthday = prompt('Your birthday in the format dd.mm.yyyy:')
  }
  let newUser = {
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
      getAge: function(){
        let today = new Date()
        let birthDate = new Date(this.birthday)
        let age = today.getFullYear() - birthDate.getFullYear()
        let month = today.getMonth() - birthDate.getMonth()
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age
      },
      getPassword: function(){
        let yearOfBirth = this.birthday.slice(6, 10)
        return firstName[0].toUpperCase() + lastName.toLowerCase() + yearOfBirth
      },
      setFirstName: function(value) {
          this.firstName = value;
        },
      setLastName: function(value) {
          this.lastName = value;
        },
      getLogin : function() {
          return (firstName[0] + lastName).toLowerCase()
      }
  }

  Object.defineProperty(newUser,'firstName', {
      writable:false,
      configurable: false,
  })
  Object.defineProperty(newUser, 'lastName', {
      writable: false,
      configurable: false,
  })
  

  return newUser
}
let newUser = createNewUser()
console.log(newUser.getLogin())
console.log(newUser.getAge())
console.log(newUser.getPassword())

