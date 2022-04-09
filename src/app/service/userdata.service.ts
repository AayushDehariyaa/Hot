import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  isDelete: boolean;

  constructor() { }

public users()
{

 return [
  {Firstname: 'Salman',Lastname: 'Khan',Email:'Salmankhan@gmail.com',DOB:'13-11-1996',isDelete: false,Check:''},
  {Firstname: 'Shahruk',Lastname: 'Khan',Email:'Shahrukkhan@gmail.com',DOB:'14-11-1996',isDelete: false,Check:''},
  {Firstname: 'Akshay',Lastname: 'Kumar',Email:'Akshaykumar@gmail.com',DOB:'15-11-1996',isDelete: false,Check:''},
  {Firstname: 'Ajay',Lastname: 'devgn',Email:'Ajaydevgn@gmail.com',DOB:'16-11-1996',isDelete: false,Check:''},
  {Firstname: 'Hritik',Lastname: 'roshan',Email:'rishanHririk@gmail.com',DOB:'17-11-1996',isDelete: false,Check:''},
  {Firstname: 'Bobby',Lastname: 'deol',Email:'bobby@gmail.com',DOB:'18-11-1996',isDelete: false,Check:''},
  {Firstname: 'Sunny',Lastname: 'deol',Email:'Sunny@gmail.com',DOB:'19-11-1996',isDelete: false,Check:''},
  {Firstname: 'Sanjay',Lastname: 'dutt',Email:'Sanjay@gmail.com',DOB:'20-11-1996',isDelete: false,Check:''},
];
/** 
 [
    {Firstname: 'Salman',Lastname: 'Khan',Email:'Salmankhan@gmail.com',DOB:'13-11-1996',isDelete: false,Check:''},
    {Firstname: 'Shahruk',Lastname: 'Khan',Email:'Shahrukkhan@gmail.com',DOB:'14-11-1996',isDelete: false,Check:''},
    {Firstname: 'Akshay',Lastname: 'Kumar',Email:'Akshaykumar@gmail.com',DOB:'15-11-1996',isDelete: false,Check:''},
    {Firstname: 'Ajay',Lastname: 'devgn',Email:'Ajaydevgn@gmail.com',DOB:'16-11-1996',isDelete: false,Check:''},
    {Firstname: 'Hritik',Lastname: 'roshan',Email:'rishanHririk@gmail.com',DOB:'17-11-1996',isDelete: false,Check:''},
    {Firstname: 'Bobby',Lastname: 'deol',Email:'bobby@gmail.com',DOB:'18-11-1996',isDelete: false,Check:''},
    {Firstname: 'Sunny',Lastname: 'deol',Email:'Sunny@gmail.com',DOB:'19-11-1996',isDelete: false,Check:''},
    {Firstname: 'Sanjay',Lastname: 'dutt',Email:'Sanjay@gmail.com',DOB:'20-11-1996',isDelete: false,Check:''},
  ]
  */
}
}
