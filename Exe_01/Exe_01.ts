interface IPerson {

name : string;
age : number;
address : string;

}


const person: IPerson = {
name: 'Ivan',
age : 22,
address : 'Berlin, Germany'

}

function updateName(person : IPerson , newName:string) :IPerson {
return {
...person,
name:newName

  }
}



const updatePerson = updateName (person , 'Marcus');

