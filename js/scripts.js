const data = [
  { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
  { name: "João", age: 18, sallary: 1500, driverLicense: false },
  { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
  { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
  { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];

// 1 - Reverse (ex: invertr a ordem dos mais novos para os mais antigos)
const reverseData = data.reverse()

console.log(reverseData)

// 2 - find (lembra: identifica e so tras o ultimo encontrado)
const hightSalary = 2000;

const highestSalary = data.find(user => user.sallary > hightSalary)

console.log(highestSalary)

// 3 - findIndex (altera o dado do index diretamente)
const lowerSallary = data.findIndex(user => 
  user.sallary > 0 && user.sallary < 2000
);

console.log(lowerSallary);

data[lowerSallary].sallary += 200;

console.log(data)

// 4 - includes (buscar se inclui algo que declaro, retorna true or false)
const number = [1, 2, 3, 4];

const hasFor = number.includes(4)

console.log(hasFor);

console.log(number.includes(100));

// 5 - map (modifica cada um baseada na condicao que aplicamos na funcao)
data.map(user => user.newsletter = false)

console.log(data)

// 6 - filter (filtrar baseado na condicao, padrao pegar true)
const drivers = data.filter(user => user.driverLicense)

console.log(drivers)

// 7 - Reducer (reduzir qualquer dado a um dado so)
const sallariesSun = data.reduce(
  (totalSallary, user) => totalSallary += user.sallary, // crio meu padrao
  0                                                     // como comeca o estado);
)

console.log(sallariesSun)

// 8 - forEach (nos que definimos o que vai fazer)
function showUserNames(users) {
  users.forEach(user => {
    console.log(`Ola ${user.name}!`);
  })
}

showUserNames(data)

// 9 - some 
let someoneWithNewsLetter = data.some(user => user.newsletter);

console.log(someoneWithNewsLetter);

data[0].newsletter = true

let someoneWithNewsletter = data.some(user => user.newsletter);

console.log(someoneWithNewsletter);

// 10 - every (considera se cada um tem qualquer valor para ser true)
const everyUsersHasName = data.every(user => user.name)

console.log(everyUsersHasName);

const everyUserHasNameGoodSallary = data.every(user => {
  return user.sallary > 2000
})

console.log(everyUserHasNameGoodSallary)