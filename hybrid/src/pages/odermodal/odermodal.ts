import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the OdermodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-odermodal',
  templateUrl: 'odermodal.html',
})
export class OdermodalPage {

  parameter : any;
  list : any;
  count : any ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
    this.parameter = navParams.data;
   // alert(JSON.stringify(this.parameter.Id.icon));
   this.count = "29";
    this.list =[{
      product_final_categories_id : '1',
      product_final_categories_icon: 'assets/imgs/product1.jpg', 
      product_final_categories_name : 'air',
      product_total : 70,
      Product_order : 0
      
      },{
        product_final_categories_id : '3',
        product_final_categories_icon: 'assets/imgs/product2.jpg', 
        product_final_categories_name : 'Google',
        product_total : 60,
        Product_order : 0
        },{
          product_final_categories_id : '4',
          product_final_categories_icon: 'assets/imgs/product3.jpg', 
          product_final_categories_name : 'HGT',
          product_total : 49,
          Product_order : 0
        },{
          product_final_categories_id : '5',
          product_final_categories_icon: 'assets/imgs/product4.jpg', 
          product_final_categories_name : 'ACB',
          product_total : 80,
          Product_order : 0
          },
          {
            product_final_categories_id : '6',
            product_final_categories_icon: 'assets/imgs/product5.jpg', 
            product_final_categories_name : 'air',
            product_total : 30,
            Product_order : 0
            
            },{
              product_final_categories_id : '7',
              product_final_categories_icon: 'assets/imgs/product3.jpg', 
              product_final_categories_name : 'Google',
              product_total : 55,
              Product_order : 0
              },{
                product_final_categories_id : '8',
                product_final_categories_icon: 'assets/imgs/product2.jpg', 
                product_final_categories_name : 'HGT',
                product_total : 90,
                Product_order : 0
              },{
                product_final_categories_id : '9',
                product_final_categories_icon: 'assets/imgs/product1.jpg', 
                product_final_categories_name : 'ACB',
                product_total : 100,
                Product_order : 0
                
                }
    
    ];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OdermodalPage');
  }


  dismiss() {
   
    this.viewCtrl.dismiss();
  }

  add(data){

    


    this.list.forEach(element => {
        if(element.product_final_categories_id==data.product_final_categories_id){
          element.Product_order++;
          if(element.product_total>0){
            element.product_total =  --element.product_total;
          }
          }
          
    });
  }

  del(data){

    this.list.forEach(element => {
      if(element.product_final_categories_id==data.product_final_categories_id){
        if(element.Product_order>0){
          --element.Product_order;
          element.product_total =  ++element.product_total;
        }
        
      }
  });
  }

}
