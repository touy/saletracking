import { Component,ViewChild } from '@angular/core';
import {MenuController, NavController,Nav,PopoverController,LoadingController,ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CustomerPage } from '../customer/customer';
import { StorePage } from '../store/store';
import { LinePage } from '../line/line';
import { OrderPage } from '../order/order';
import { BillPage } from '../bill/bill';
import { ReportPage } from '../report/report';
import { PopoverPage } from '../popover/popover';
import { OdermodalPage } from '../odermodal/odermodal';
import { TaskPage } from '../task/task';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;
  selectedData:any = {title:"None Selected",id:0};
  popover :any;
  list : any;
  imageStore: any={icon :"assets/imgs/cartoon-shop.jpg",tile:"",btn:true};

  constructor(public md : ModalController, public navCtrl: NavController,public loadingCtrl : LoadingController,public popoverCtrl : PopoverController, public menu: MenuController) {
   
    this.pages = [
      { title: 'ໜ້າຫຼັກ', component: HomePage },
      { title: 'ລູກຄ້າ', component: CustomerPage },
      { title: 'ຮ້ານຄ້າ', component: StorePage },
      { title: 'ສາຍງານ', component: LinePage },
      { title: 'ສັ່ງເຄື່ອງ', component: OrderPage },
      { title: 'ໃບບີນ', component: BillPage },
      { title: 'ລາຍງານ', component: ReportPage },
      { title: 'ອອກລະບົບ', component: LoginPage },
      { title : 'ຕາຕະລາງວຽກ', component : TaskPage }

    ];

    this.list =[{
      product_final_categories_id : '1',
      product_final_categories_icon: 'assets/imgs/featured_image1.jpg', 
      product_final_categories_name : 'air'
      
      },{
        product_final_categories_id : '3',
        product_final_categories_icon: 'assets/imgs/featured_image.jpg', 
        product_final_categories_name : 'Google'
        },{
          product_final_categories_id : '4',
          product_final_categories_icon: 'assets/imgs/featured_image 2.jpg', 
          product_final_categories_name : 'HGT'
        },
          {
            product_final_categories_id : '1',
            product_final_categories_icon: 'assets/imgs/featured_image1.jpg', 
            product_final_categories_name : 'air'
            
            },{
              product_final_categories_id : '3',
              product_final_categories_icon: 'assets/imgs/featured_image.jpg', 
              product_final_categories_name : 'Google'
              },{
                product_final_categories_id : '4',
                product_final_categories_icon: 'assets/imgs/featured_image 2.jpg', 
                product_final_categories_name : 'HGT'
              }
    
    ];
    this.presentLoading();
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'ກຳລັງໂຫຼດ....',
      duration: 1000,
      dismissOnPageChange: true
    }).present();
  }

  
  presentPopover(ev) {
   // let listData = [{title:"Settings",id:1},{title:"Logout",id:2},{title:"Profile",id:3},{title:"Help",id:4}]
  // this.popoverCtrl.create(PopoverPage, { listData }).present({ ev: ev });  
    this.menu.open();
   
  }

  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  presentProfileModal(data) {
    let profileModal = this.md.create(OdermodalPage, { Id: data });   
    profileModal.present();
  }


  ondemand_details(post){

    //alert(post);
    this.imageStore.icon = post.product_final_categories_icon;
    this.imageStore.title =post.product_final_categories_name;
    this.imageStore.btn=false;

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
   if(page.component==LoginPage){ 
          this.navCtrl.pop();
       }
   else{
    this.navCtrl.push(page.component);
   }
   
  
  }

}
