// const fs= require('fs');
const fs= require('node:fs');
// --------------------Методи------------------------
// fs.readFile('./text.txt',(err, data)=>{
//     console.log(err,'ERR');
//     console.log(data.toString());
// })
//---------------------------------------------------
// fs.appendFile('./text.txt','Hello \n',(err)=>{
//     console.log('ERR',err);
// })
//---------------------------------------------------
// fs.writeFile('./text.txt','WRITE FILE \n',(err)=>{
//     console.log('ERR',err);
// })
//---------------------------------------------------
// зчитаємо дані з text.txt та перезапишемо як копію в copy.txt
// fs.readFile('./text.txt',(err, data )=>{
//     fs.appendFile('./copy.txt',data,(err)=>{
//         console.log(err);
//     })
// })
//---------------------------------------------------
// fs.mkdir('./students',(err)=>{
//     console.log(err);
// })
// fs.appendFile('./students/data.json',JSON.stringify({name:'Iva'}),(err)=>{
//     console.log(err);
// })
//---------------------------------------------------
// fs.truncate('./copy.txt',(err)=>{
//     console.log(err);
// })
//---------------------------------------------------
// fs.unlink('./copy.txt',(err)=>{
//     console.log(err);
// })
//---------------------------------------------------
// fs.rmdir('./students',{recursive:true},(err)=>{
//     console.log(err);
// })
//---------------------------------------------------
// fs.rename('./text.txt', './users.txt',(err)=>{
//     console.log(err);
// })
// fs.rename('./users.txt', './stud/users.txt',(err)=>{
//     console.log(err);
// })
//---------------------------------------------------
// fs.copyFile('./stud/users.txt','./stud/copy.txt',(err)=>{
//     console.log(err);
// })
//---------------------------------------------------
// fs.readdir('./stud',(err, files)=>{
//     console.log(files);
//
//     for (const fileName of files){
//         fs.stat(`./stud/${fileName}`,(err, stats)=>{
//             console.log(`./stud/${fileName}`);
//             console.log(stats.isDirectory());
//
//             if (stats.isFile()){
//                 fs.readFile(`./stud/${fileName}`,(err, data)=>{
//                     console.log(data.toString());
//                 })
//             }
//         })
//     }
// })
// або такий спосіб
// fs.readdir('./stud',{withFileTypes:true}, (err, files)=>{
//     console.log(files);
//     for (const file of files){
//         console.log(file.isFile());
//     }
// })

// --------------------Модулі------------------------

// const builder = require('./stud/create');
//
// let stud1 = builder.studBuilder('Sonya', 16);
// console.log(stud1);
// console.log(stud1.name);
// console.log(stud1.age);

// let stud1 = builder.fName('Sonya', 16);
//---------------------------------------------------