import { Component,ChangeDetectionStrategy, OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import  { VisitPage } from '../visit/visit';

//import $ from 'jquery';
//import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from "ion2-calendar";


/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})


export class TaskPage {
  

  datenow :any;
  dateend:any;
  datefirst:any;
  weekday:any;
  datename:any;
  month:any;
  list:any;
 photos : any;
base64Image : string;


  
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl : ModalController) {

    let d = new Date();
    this.datenow  = d.getDate();   
    this.weekday = new Array(7);
    this.weekday[0] = "Sun";
    this.weekday[1] = "Mon";
    this.weekday[2] = "Tue";
    this.weekday[3] = "Wed";
    this.weekday[4] = "Thu";
    this.weekday[5] = "Fri";
    this.weekday[6] = "Sat";


   var month = d.getMonth();
    var year = d.getFullYear();     
          var FirstDay = new Date(year, month , 1);
          var LastDay = new Date(year, month + 1, 0);
    this.dateend = LastDay.getDate();
    this.datename = this.weekday[FirstDay.getDay()];
   switch(this.datename){

    case "Sun" :this.datefirst=7;break;
    case "Mon" :this.datefirst=1;break;
    case "Tue" :this.datefirst=2;break;
    case "Wed" :this.datefirst=3;break;
    case "Thu" :this.datefirst=4;break;
    case "Fri" :this.datefirst=5;break;
    case "Sat" :this.datefirst=6;break;

   }

   switch(d.getMonth()){
    
        case 0 :this.month='ມັງກອນ';break;
        case 1 :this.month='ກຸມພາ';break;
        case 2 :this.month='ມີນາ';break;
        case 3 :this.month='ເມສາ';break;
        case 4 :this.month='ພືດສະພາ';break;
        case 5 :this.month='ມີຖຸນາ';break;
        case 6 :this.month='ກໍລະກົດ';break;
        case 7 :this.month='ສີງຫາ';break;
        case 8 :this.month='ກັນຍາ';break;
        case 9 :this.month='ຕຸລາ';break;
        case 10 :this.month='ພະຈີກ';break;
        case 11 :this.month='ທັນວາ';break;
       
    
       }


       this.list =[{
        product_final_categories_id : '1',
        product_final_categories_icon: 'assets/imgs/featured_image1.jpg', 
        product_final_categories_name : 'air',
        product_final_status: true
        
        },{
          product_final_categories_id : '3',
          product_final_categories_icon: 'assets/imgs/featured_image.jpg', 
          product_final_categories_name : 'Google',
          product_final_status: true
          },{
            product_final_categories_id : '4',
            product_final_categories_icon: 'assets/imgs/featured_image 2.jpg', 
            product_final_categories_name : 'HGT',
            product_final_status: true
          },
            {
              product_final_categories_id : '5',
              product_final_categories_icon: 'assets/imgs/featured_image1.jpg', 
              product_final_categories_name : 'air',
              product_final_status: true
              
              },{
                product_final_categories_id : '6',
                product_final_categories_icon: 'assets/imgs/featured_image.jpg', 
                product_final_categories_name : 'Google',
                product_final_status: true
                },{
                  product_final_categories_id : '7',
                  product_final_categories_icon: 'assets/imgs/featured_image 2.jpg', 
                  product_final_categories_name : 'HGT',
                  product_final_status: true
                }
      
      ];




  }

  ionViewDidLoad() {
  
    console.log('ionViewDidLoad TaskPage');
  }

  ondemand_details(post){

   // alert("DF");

        let profileModal = this.modalCtrl.create(VisitPage, { Id: post });   
        profileModal.onDidDismiss(data => {
          this.list.forEach(element => {
                if(element.product_final_categories_id==data.id){
                  element.product_final_status = data.status;
                }
          });
   
        });
        profileModal.present();

      
    
      }

    
    selectDate(data){
          alert(data);
    }
 




  createRange1(){
   
    let items: number[] = [];
    for(let i = 0; i <35; i++){
       items.push(i);
   
    }
   
    return items;
  }



 
  /*

      openCalendar() {
        const options: CalendarModalOptions = {
          pickMode: 'range',
          title: 'RANGE',
          defaultSubtitle:'hellow'
        
        };

        let myCalendar = this.modalCtrl.create(CalendarModal, {
          options: options
        });

        myCalendar.present();

        myCalendar.onDidDismiss((date: { from: CalendarResult; to: CalendarResult }, type: string) => {
          console.log(date);
        });
    }
    */

}
