import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseComponent } from './firebase/firebase.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { BanComponent } from './ban/ban.component';
import { ThucUongComponent } from './thuc-uong/thuc-uong.component';
import { TestComponent } from './test/test.component';
import { UploadService } from 'app/shared/upload.service';
import { HomNayComponent } from './hom-nay/hom-nay.component';
import { DataService } from 'app/shared/data.service';
import { LoaderComponent } from './loader/loader.component';
import { ThongKeComponent } from './thong-ke/thong-ke.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { QuanTriComponent } from './quan-tri/quan-tri.component';
import { NhanVienComponent } from './nhan-vien/nhan-vien.component';
import { AngularTestComponent } from './angular-test/angular-test.component';
import { ThemBanTestComponent } from './them-ban-test/them-ban-test.component';

const appRoutes: Routes = [

  { path: 'dang-nhap', component: DangNhapComponent },
  { path: 'them-ban', component: ThemBanTestComponent },
  {
    path: 'quan-tri', component: QuanTriComponent,
    children: [
      { path: 'ban', component: BanComponent, outlet: 'quan-tri' },
      { path: 'test', component: BanComponent, outlet: 'quan-tri' },
      { path: 'thuc-uong', component: ThucUongComponent, outlet: 'quan-tri' },
      { path: 'hom-nay', component: HomNayComponent, outlet: 'quan-tri' },
      { path: 'thong-ke', component: ThongKeComponent, outlet: 'quan-tri' },
      { path: 'nhan-vien', component: NhanVienComponent,outlet:'quan-tri'},
    ],
  },
  { path: '', redirectTo: 'dang-nhap', pathMatch: 'full' },

];
@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent,
    HeaderComponent,
    FooterComponent,
    MainSidebarComponent,
    BanComponent,
    ThucUongComponent,
    TestComponent,
    HomNayComponent,
    LoaderComponent,
    ThongKeComponent,
    DangNhapComponent,
    QuanTriComponent,
    NhanVienComponent,
    AngularTestComponent,
    ThemBanTestComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [UploadService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
