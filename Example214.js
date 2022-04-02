const users = [
    {firstName: "Ram", lastName:"Patil", age:25},
    {firstName: "Gaurav", lastName:"Joshi", age:40},
    {firstName: "sham", lastName:"Apake", age:50},
    {firstName: "Suresh", lastName:"Kumar", age:25},
];
//list of full Names
const output1 = users.map((x) => x.firstName+" "+x.lastName);
console.log(output1);

//calculate age count
const output = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});
console.log(output);

//age less than 30
const output2=users.filter((x)=>x.age<30).map((x)=>x.firstName);
console.log(output2);