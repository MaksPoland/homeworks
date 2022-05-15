console.log(NaN || 2 || undefined);
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( null && !3 );
console.log( NaN || null || !3 || undefined || 5);
 
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

//for (let i = 2; i <= 16; i++) {
    //     if (i % 2 === 0) {
    //         continue;
    //     } else {
    //         console.log(i);
    //     }
let result ='';
const length = 6;
for(let i = 0; i <= length; i++){
for(let j =0; j < i;j++){
    result += '*';
}
result += '\n'
}
console.log(result)
