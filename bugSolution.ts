function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string[] {
  return people.map(person => greeter(person));
}

let user = ["Jane Doe", "John Smith"];

console.log(greeterArray(user)); // Output: ['Hello, Jane Doe', 'Hello, John Smith']

//Alternative solution:

for (let i = 0; i < user.length; i++) {
    console.log(greeter(user[i]));
}