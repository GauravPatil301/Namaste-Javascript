//SetTimeout Explanation

// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("Hello World");
// }
// x();

// Example2 SetTimeout printing 666666

// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },  i*1000);
//     }
//     console.log("Hello World");
// }
// x();

// SetTimeout example3 12345
// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },  i*1000);
//     }
//     console.log("Hello World");
// }
// x();

//SetTimeout example4 using var only

function x(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(function() {
                console.log(x);
            },  x*1000);
        }
        close(i);
    }
    console.log("Hello World");
}
x();
