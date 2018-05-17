import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: "app-dang-nhap",
  templateUrl: "./dang-nhap.component.html",
  styleUrls: ["./dang-nhap.component.css"]
})
export class DangNhapComponent implements OnInit {
  kiemTraDanghap = true;
  error='';
  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    if (f.value.tenDangNhap == 'khangnhd' && f.value.matKhau == '123') {
      this.router.navigateByUrl('/quan-tri/(quan-tri:thuc-uong)');
      this.kiemTraDanghap = true;
      this.error='Đăng nhập thành công';
      console.log('dang nhap thanh cong');
    }
    else if(f.value.tenDangNhap == '' && f.value.matKhau == ''){
      console.log('ten dang nhap va mat khau khong duoc rong');
      this.kiemTraDanghap = false;
      this.error='Tên đăng nhập và mật khẩu không được rỗng';
    }
    else if(f.value.tenDangNhap == '' && f.value.matKhau != ''){
      console.log('ten dang nhap khong duoc rong');
      this.kiemTraDanghap = false;
      this.error='Tên đăng nhập không được rỗng';
    }
    else if(f.value.tenDangNhap != '' && f.value.matKhau == ''){
      console.log('mat khau khong duoc rong');
      this.kiemTraDanghap = false;
      this.error='Mật khẩu không được rỗng';
    }
    else {
      this.kiemTraDanghap = false;
      console.log('ten dang nhap va mat khau khong dung');
      this.kiemTraDanghap = false;
      this.error='Tên đăng nhập và mật khẩu không đúng';
    }
  }
}
