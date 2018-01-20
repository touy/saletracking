import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
//import { CalendarModule } from 'ion2-calendar'
import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CustomerPage } from '../pages/customer/customer';
import { StorePage } from '../pages/store/store';
import { LinePage } from '../pages/line/line';
import { OrderPage } from '../pages/order/order';
import { BillPage } from '../pages/bill/bill';
import { ReportPage } from '../pages/report/report';
import { PopoverPage } from '../pages/popover/popover';
import { OdermodalPage } from '../pages/odermodal/odermodal';
import { TaskPage } from '../pages/task/task';
import { VisitPage } from '../pages/visit/visit';
//import { CalendarModule } from 'angular-calendar';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CustomerPage,
    StorePage,
    LinePage,
    OrderPage,
    BillPage,
    ReportPage,
    PopoverPage,
    OdermodalPage,
    TaskPage,
    VisitPage
    

 


  ],
  imports: [
  //  CalendarModule,
 // CalendarModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CustomerPage,
    StorePage,
    LinePage,
    OrderPage,
    BillPage,
    ReportPage,
    PopoverPage,
    OdermodalPage,
    TaskPage,
    VisitPage

 

  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    Geolocation,
    {provide:  ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
