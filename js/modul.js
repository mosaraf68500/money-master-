// let name="mosaraf";
// name='name change';
// console.log(name)

// const age=30;
// const name="mosaraf";
// if(name==="mosaraf" && age<=20){
//     console.log("kotha sotto");
// }
// else{
//     console.log("kotha misa")
// }

//  const frinds=['mosaraf', "rony",'imran', 'ahad'];

//  for(let i=0;i<frinds.length;i++){
//     console.log(frinds[i]);
//  }

// frinds.push("goni")
// frinds.pop()
// frinds.shift()
// frinds.unshift('ami')
//  console.log(frinds)

// function sum(a,b){

//     console.log(...arguments)
//     console.log(arguments.length)
//     return a+b
// }

// const result=sum(2,3)
// console.log(result)

// persons={
//     name:"hero",
//     age:23,
//     frinds:['ami asi', 'tmi '],
//     status:true
// }

// console.log(persons.age)


// const fName="mosaraf";
// const lName="Hossen";
// console.log(` hi ami ${fName} ${lName}`)


// const sum =(a,b)=>a+b;
// const result=sum(12,8)
// console.log(result)


// const sum=(...rest)=>{
//     // console.log(rest)
//     console.log(rest.length)

//     for(let i=0;i<rest.length;i++){
//         console.log(rest[i])
//     }
// }


const numbers=[12,2,3,1,3,2]
const numr=[98,35,65];
const add=[...numbers, ...numr]
console.log(add)

// console.log(...numbers)