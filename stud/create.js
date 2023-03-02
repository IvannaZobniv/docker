function studBuilder(name,age){
    return{
        name,
        age,
        sleep:()=>{
            console.log('No sleep!!!!!')
        }
    }
}

module.exports={studBuilder};
// module.exports.fName = studBuilder;
// module.exports.lesson = 1;

// module.exports = {
//         creator: (name,age)=>{
//         return{
//             name,
//             age,
//             sleep:()=>{
//                 console.log('No sleep!!!!!')
//             }
//         }
//     },
//     lesson:'FS'
// }
