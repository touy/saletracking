import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';





@Injectable()
export class AuthProvider {


  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

   login(){
    //this.http.get("");
    return new Promise((resolve) =>{


          setTimeout(() => {
            resolve(false);

          },3000);

    });

  }

  

}
