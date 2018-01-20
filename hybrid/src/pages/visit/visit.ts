import { Component , ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the VisitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-visit',
  templateUrl: 'visit.html',
})
export class VisitPage {
  imageURI:any;
  imageFileName:any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;


 
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController,private camera : Camera, public toastCtrl: ToastController,private geolocation: Geolocation) {
  
  this.imageURI ="assets/imgs/phone-icons-.jpg";
  //this.getLocation();
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitPage');
    this.loadMaps();
    
  }


  addMarker(){
    
     let marker = new google.maps.Marker({
       map: this.map,
       animation: google.maps.Animation.DROP,
       position: this.map.getCenter()
     });
    
     let content = "<h4>Information!</h4>";         
    
     this.addInfoWindow(marker, content);
    }   


    addInfoWindow(marker, content){
      
       let infoWindow = new google.maps.InfoWindow({
         content: content
       });
      
       google.maps.event.addListener(marker, 'click', () => {
         infoWindow.open(this.map, marker);
       });
      
     }

  loadMaps(){
    
       this.geolocation.getCurrentPosition().then((position) => {
    
         let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
         let mapOptions = {
           center: latLng,
           zoom: 16,
           mapTypeId: google.maps.MapTypeId.ROADMAP
         }
    
         this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
       }, (err) => {
         console.log(err);
       });
    
     }
    
   





  visit(){
    let data ={'status':false,'id':this.navParams.data.Id.product_final_categories_id};
    this.viewCtrl.dismiss(data);

  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  getcamera() {
    this.camera.getPicture({destinationType: 2, saveToPhotoAlbum:true}).then((imageData) => {
       this.imageURI = imageData;
    
    },
    (err) => {
       console.log(err);
       //This could also be triggered when the user presses the cancel button.
    });
  }


  getLocation(){
    


  }



  loadMap(){
    
       this.geolocation.getCurrentPosition().then((position) => {
    
         let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
         let mapOptions = {
           center: latLng,
           zoom: 15,
           mapTypeId: google.maps.MapTypeId.ROADMAP
         }
    
         this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
       }, (err) => {
         console.log(err);
       });
    
     }


  

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  dismiss() {
    
    
     this.viewCtrl.dismiss();
   }
}
