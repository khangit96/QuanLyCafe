import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AngularFireDatabase, snapshotChanges } from "angularfire2/database";
import { Ban } from "app/shared/ban";
import { Observable } from "rxjs/Observable";
import { DataService } from "app/shared/data.service";
@Component({
  selector: 'app-them-ban-test',
  templateUrl: './them-ban-test.component.html',
  styleUrls: ['./them-ban-test.component.css']
})
export class ThemBanTestComponent {
  danhSachBan: Ban[] = [];
  bolTinhTrangBan = null;
  locDanhSachBan: Ban[] = [];
  tinhTrangBan = 'Tất cả';
  classXemChiTiet = 'w3-bar-item w3-button w3-gray';
  classChinhSua = 'w3-bar-item w3-button w3-green';
  displayXemChiTiet = true;
  displayChinhSua = false;
  banChon = { tenBan: '', soBan: 0, key: '', tinhTrang: true };
  error = '';
  kiemTraThemBan= true;
  // constructor(
  //   public db: AngularFireDatabase,
  //   public dataService: DataService
  // ) {}

 // ngOnInit() {
    // this.dataService.changeMessage("false");
    // const items = this.db.list("Ban");
    // items.snapshotChanges().subscribe(actions => {
    //   this.danhSachBan = [];
    //   actions.forEach(action => {
    //     let ban = action.payload.val();
    //     let BAN = {
    //       tenBan: ban.tenBan,
    //       soBan: ban.soBan,
    //       key: action.key,
    //       tinhTrang: ban.tinhTrang
    //     };
    //     this.danhSachBan.push(BAN);
    //     this.dataService.changeMessage("true");
    //   });

    //   if (this.bolTinhTrangBan != null) {
    //     this.locDanhSachBan = this.danhSachBan.filter(
    //       ban => ban.tinhTrang == this.bolTinhTrangBan
    //     );
    //   } else {
    //     this.locDanhSachBan = this.danhSachBan;
    //   }
    // });
  //}

  onSubmit(f: NgForm) {
    if (f.value.tenBan != '' && f.value.soBan != '') {
      this.kiemTraThemBan = true;
      this.error = 'Thêm bàn thành công';
      alert('Thêm bàn thành công');
        // const item = this.db.list('Ban');
        // item.push(new Ban(f.value.tenBan, Number(f.value.soBan)));
    }
   else if (f.value.tenBan== '' && f.value.soBan != '') {
      this.kiemTraThemBan = false;
      this.error = 'Tên bàn không được trống';
      console.log(this.error);
    }
    else if (f.value.tenBan != '' && f.value.soBan == '') {
      this.kiemTraThemBan = false;
      this.error = 'Số bàn không được trống';
      console.log(this.error);
    }
    else if (f.value.tenBan == '' && f.value.soBan == '') {
      this.kiemTraThemBan = false;
      this.error = 'Tên bàn và số bàn không được trống';
      console.log(this.error);
    }
  }

  // xemBan(ban: Ban) {
  //   this.banChon = ban;
  // }
  // clickChucNang(chucNang: string) {
  //   if (chucNang == "xemChiTiet") {
  //     this.displayXemChiTiet = true;
  //     this.displayChinhSua = false;

  //     this.classXemChiTiet = "w3-bar-item w3-button w3-gray";
  //     this.classChinhSua = "w3-bar-item w3-button w3-green";
  //   } else {
  //     this.displayChinhSua = true;
  //     this.displayXemChiTiet = false;

  //     this.classXemChiTiet = "w3-bar-item w3-button w3-green";
  //     this.classChinhSua = "w3-bar-item w3-button w3-gray";
  //   }
  // }

  // capNhatBan() {
  //   const ban = this.db.object("Ban/" + this.banChon.key);
  //   ban.update({
  //     tenBan: this.banChon.tenBan,
  //     soBan: Number(this.banChon.soBan)
  //   });
  // }

  // xoaBan() {
  //   this.db.object("Ban/" + this.banChon.key).remove();
  // }

  // kiemTraTinhTrangBan(tinhTrang: boolean) {
  //   if (tinhTrang) {
  //     return "(Còn trống)";
  //   }
  //   return "(Hết chỗ)";
  // }

  // locTheoTinhTrangBan() {
  //   if (this.tinhTrangBan == "Còn trống") {
  //     this.bolTinhTrangBan = true;
  //     this.locDanhSachBan = this.danhSachBan.filter(
  //       ban => ban.tinhTrang == this.bolTinhTrangBan
  //     );
  //   } else if (this.tinhTrangBan == "Hết chỗ") {
  //     this.bolTinhTrangBan = false;
  //     this.locDanhSachBan = this.danhSachBan.filter(
  //       ban => ban.tinhTrang == this.bolTinhTrangBan
  //     );
  //   } else {
  //     this.bolTinhTrangBan = null;
  //     this.locDanhSachBan = this.danhSachBan;
  //   }
  // }

}
