import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataService } from 'app/shared/data.service';
import { NhanVien } from 'app/shared/nhan-vien';
@Component({
  selector: 'app-nhan-vien',
  templateUrl: './nhan-vien.component.html',
  styleUrls: ['./nhan-vien.component.css']
})
export class NhanVienComponent implements OnInit {
  nhanVien: NhanVien = new NhanVien();
  danhSachNhanVien: NhanVien[] = [];
  constructor(public db: AngularFireDatabase, public dataService: DataService) { }

  ngOnInit() {
    this.dataService.changeMessage('false');
    const items = this.db.list('NhanVien');
    items.snapshotChanges()
      .subscribe(actions => {
        let stt = 0;
        this.danhSachNhanVien = [];
        actions.forEach(action => {
          stt++;
          let objectNhanVien = action.payload.val();
          let nhanVien = {
            stt: stt, tenDangNhap: objectNhanVien.tenDangNhap, matKhau: objectNhanVien.matKhau,
            hoTen: objectNhanVien.hoTen, soDienThoai: objectNhanVien.soDienThoai, email: objectNhanVien.email, key: action.key
          };
          this.danhSachNhanVien.push(nhanVien);
          this.dataService.changeMessage('true');
        });

      });
  }

  onSubmit(f: NgForm) {
    const item = this.db.list("NhanVien");
    item.push(this.nhanVien)
  }

  xemChiTiet(nhanVien:NhanVien) {
    this.nhanVien=nhanVien;
  }
  capNhat(nhanVien:NhanVien){
     this.nhanVien=nhanVien;

  }

  capNhatNhanVien(){
    this.db.object("NhanVien/"+this.nhanVien.key).update(this.nhanVien);
  }

  xoa(nhanVien:NhanVien){
    this.nhanVien=nhanVien;
  }

  dongYXoa(){
    this.db.object("NhanVien/"+this.nhanVien.key).remove();
  }
}
