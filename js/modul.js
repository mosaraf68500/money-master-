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

// const numbers=[12,2,3,1,3,2]
// const numr=[98,35,65];
// const add=[...numbers, ...numr]
// console.log(add)

// console.log(...numbers)

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 1199,
    color: "Titanium Blue",
    model: "A3101",
  },
  {
    id: 2,
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1299,
    color: "Phantom Black",
    model: "SM-S928U",
  },
  {
    id: 3,
    name: "Pixel 8 Pro",
    brand: "Google",
    price: 999,
    color: "Obsidian",
    model: "GA04784-US",
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 899,
    color: "Emerald Green",
    model: "CPH2581",
  },
  {
    id: 5,
    name: "Xiaomi 14 Pro",
    brand: "Xiaomi",
    price: 799,
    color: "Black",
    model: "23116PN5BC",
  },
  {
    id: 6,
    name: "Motorola Edge 50 Pro",
    brand: "Motorola",
    price: 749,
    color: "Lunar Blue",
    model: "XT2401",
  },
  {
    id: 7,
    name: "Sony Xperia 1 V",
    brand: "Sony",
    price: 1199,
    color: "Khaki Green",
    model: "XQ-DQ72",
  },
  {
    id: 8,
    name: "Asus ROG Phone 8 Pro",
    brand: "Asus",
    price: 1399,
    color: "Phantom Black",
    model: "AI2401_A",
  },
  {
    id: 9,
    name: "Realme GT 5 Pro",
    brand: "Realme",
    price: 699,
    color: "Red Rock",
    model: "RMX3888",
  },
  {
    id: 10,
    name: "Vivo X100 Pro",
    brand: "Vivo",
    price: 999,
    color: "Startrail Blue",
    model: "V2309A",
  },
];

//   console.log(products)

// map

// const result = products.map((product) => {
//   return product.name;
// });

// console.log(result);

// forEach
// products.forEach(product=>{
//     console.log(product.model)
// })


// filter

// const found=products.filter(product =>product.id !==9)

// console.log(found)



// const result=products.find(product=>{
//     product.price>=900;
// })

// console.log(result)


// const result =products.find(p =>p.price>1200);
// console.log(result)

const isActiove=false;
const showUser=()=>console.log("show user active");
const hideUser=()=>console.log("hide user");

isActiove?showUser():hideUser();


isActiove && showUser();

