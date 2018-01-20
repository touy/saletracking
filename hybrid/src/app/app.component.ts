import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';
import { TaskPage } from '../pages/task/task';






@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = LoginPage;
  //loader:any;

  constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
    this.initializeApp();
   

  }

    initializeApp() {

      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.hide();
        this.splashScreen.hide();
      });

    }
   

   
  


    /*
    this.auth.login().then((isLoggedin)=>{

      if(isLoggedin){
          this.rootPage = HomePage;
        
      }
      else{
        this.rootPage = LoginPage;

      }
     

    });
 */
   

   
    

   



}

