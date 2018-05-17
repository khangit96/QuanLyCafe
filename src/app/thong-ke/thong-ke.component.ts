import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, snapshotChanges } from "angularfire2/database";
import { HoaDon } from "app/shared/hoa-don";
import { GoiThucUong } from "app/shared/goi-thuc-uong";
import { Ban } from "app/shared/ban";
import { NhanVien } from "app/shared/nhan-vien";
@Component({
  selector: "app-thong-ke",
  templateUrl: "./thong-ke.component.html",
  styleUrls: ["./thong-ke.component.css"]
})
export class ThongKeComponent implements OnInit {
  tenNhanVien = "";
  tenBan = "";
  danhSachNhanVien: NhanVien[] = [];
  date = new Date(Date.now());
  ngayBatDau: Date;
  ngayKetThuc: Date;
  danhSachHoaDon: HoaDon[] = [];
  danhSachThucUong: GoiThucUong[] = [];
  tongSoTien = 0;
  danhSachThucUongSelected: GoiThucUong[] = [];
  locHoaDonTheoBan: HoaDon[] = [];
  hoaDonTheoNhanVien: HoaDon[] = [];
  hoaDonTheoBan: HoaDon[] = [];
  hoaDonTheoThang:HoaDon[]=[];
  tongSoTienTheoThang=0;

  danhSachBan: Ban[] = [
    new Ban("Bàn 1", 1),
    new Ban("Bàn 2", 2),
    new Ban("Bàn 3", 3),
    new Ban("Bàn 4", 4),
    new Ban("Bàn 5", 5),
    new Ban("Bàn 6", 6),
    new Ban("Bàn 7", 7),
    new Ban("Bàn 8", 8),
    new Ban("Bàn 9", 9),
    new Ban("Bàn 10", 10),
    new Ban("Bàn 11", 11)
  ];
  dsThang=[1,2,3,4,5,6,7,8,9,10,11,12];
  thang='';

  constructor(public db: AngularFireDatabase) {}
  ngOnInit() {
    const items = this.db.list("NhanVien");
    items.snapshotChanges().subscribe(actions => {
      let stt = 0;
      this.danhSachNhanVien = [];
      actions.forEach(action => {
        stt++;
        let objectNhanVien = action.payload.val();
        let nhanVien = {
          stt: stt,
          tenDangNhap: objectNhanVien.tenDangNhap,
          matKhau: objectNhanVien.matKhau,
          hoTen: objectNhanVien.hoTen,
          soDienThoai: objectNhanVien.soDienThoai,
          email: objectNhanVien.email,
          key: action.key
        };
        this.danhSachNhanVien.push(nhanVien);
      });
    });
    this.layDuLieuHoaDonTheoNgay();
  }

  selectDate() {
    this.layDuLieuHoaDonTheoNgay();
  }

  layDuLieuHoaDonTheoNgay() {
    this.danhSachHoaDon = [];
    let dateFormat =
      new Date(this.date).getDate() +
      "/" +
      Number(new Date(this.date).getMonth() + 1);
    const hoaDon = this.db.list("/HoaDon", ref =>
      ref.orderByChild("thoiGianNgan").equalTo(dateFormat)
    );
    hoaDon.snapshotChanges().subscribe(actions => {
      console.log("co hoa don");
      this.tongSoTien = 0;
      this.danhSachHoaDon = [];
      let sttHoaDon = 0;
      actions.forEach(action => {
        let objectHoaDon = action.payload.val();
        if (objectHoaDon.thanhToan) {
          objectHoaDon.danhSachGoiThucUong.forEach(element => {
            this.danhSachThucUong.push(
              new GoiThucUong(
                element.soLuong,
                element.soTien,
                element.gia,
                element.hinhAnh,
                element.ten
              )
            );
          });
          this.danhSachHoaDon.push(
            new HoaDon(
              sttHoaDon,
              objectHoaDon.tenNhanVien,
              action.key,
              objectHoaDon.soBan,
              objectHoaDon.thanhToan,
              objectHoaDon.thoiGianNgan,
              objectHoaDon.thoiGianDai,
              objectHoaDon.tongSoTien,
              objectHoaDon.moTa,
              this.danhSachThucUong
            )
          );
          this.danhSachThucUong = [];
          this.tongSoTien += objectHoaDon.tongSoTien;
        }
      });

      this.danhSachHoaDon.reverse();
      this.danhSachHoaDon.forEach(element => {
        sttHoaDon++;
        element.stt = sttHoaDon;
      });

      let count = 0;
      this.danhSachBan.forEach(element => {
        count++;
        element.tongHoaDon = this.danhSachHoaDon.filter(
          hd => hd.soBan == element.soBan
        ).length;
        element.stt = count;

        this.danhSachHoaDon
          .filter(hd => hd.soBan == element.soBan)
          .forEach(e => {
            element.tongSoTien = element.tongSoTien + e.tongSoTien;
          });
      });
      this.hoaDonTheoNhanVien = this.danhSachHoaDon.filter(
        hd => hd.tenNhanVien == this.danhSachNhanVien[0].tenDangNhap
      );
    });
  }

  inTatCa(hoaDon:string) {
    let printContents, popupWin;
    printContents = document.getElementById(hoaDon).innerHTML;
    popupWin = window.open("", "_blank", "top=0,left=0,height=100%,width=auto");
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`);
    popupWin.document.close();
  }
  xemChiTiet(hoaDon: HoaDon) {
    this.danhSachThucUongSelected = hoaDon.danhSachGoiThucUong;
  }

  locHoaDonTheoNhanVien() {
    this.hoaDonTheoNhanVien = this.danhSachHoaDon.filter(
      hd => hd.tenNhanVien == this.tenNhanVien
    );
  }

  LOCHOADONTHEOBAN() {
    this.hoaDonTheoBan = this.danhSachHoaDon.filter(
      hd => hd.soBan == Number(this.tenBan)
    );
  }
  ChonThang(){
    this.tongSoTienTheoThang=0;
    let count=0;
    this.hoaDonTheoThang=[];
    const hoaDon = this.db.list("/HoaDon");
    hoaDon.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        let objectHoaDon = action.payload.val();
        let splitObjectHoaDon=objectHoaDon.thoiGianNgan.split('/',objectHoaDon.length);
        if(splitObjectHoaDon[1]==this.thang.substring(6,this.thang.length)){
          this.hoaDonTheoThang.push(objectHoaDon);
        }
      })

      this.hoaDonTheoThang.forEach(element => {
          count++;
          element.stt=count;
          this.tongSoTienTheoThang+=element.tongSoTien;
      });
    });
  }
  // selectNgayBatDau() {}

  // selectNgayKetThuc() {
  //   let startDate = new Date(this.ngayBatDau).getDate();
  //   let endDate = new Date(this.ngayKetThuc).getDate();
  //   let startMonth = new Date(this.ngayBatDau).getMonth() + 1;
  //   let endMonth = new Date(this.ngayKetThuc).getMonth() + 1;

  //   const hoaDon = this.db.list("/HoaDon");
  //   hoaDon.snapshotChanges().subscribe(actions => {
  //     this.tongSoTien = 0;
  //     this.hoaDonTheoThang = [];
  //     let sttHoaDon = 0;
  //     actions.forEach(action => {
  //       let objectHoaDon = action.payload.val();
  //       if (objectHoaDon.thanhToan) {
  //         objectHoaDon.danhSachGoiThucUong.forEach(element => {
  //           this.danhSachThucUong.push(
  //             new GoiThucUong(
  //               element.soLuong,
  //               element.soTien,
  //               element.gia,
  //               element.hinhAnh,
  //               element.ten
  //             )
  //           );
  //         });
  //         this.hoaDonTheoThang.push(
  //           new HoaDon(
  //             sttHoaDon,
  //             objectHoaDon.tenNhanVien,
  //             action.key,
  //             objectHoaDon.soBan,
  //             objectHoaDon.thanhToan,
  //             objectHoaDon.thoiGianNgan,
  //             objectHoaDon.thoiGianDai,
  //             objectHoaDon.tongSoTien,
  //             objectHoaDon.moTa,
  //             this.danhSachThucUong
  //           )
  //         );
  //         this.danhSachThucUong = [];  hoaDonTheoThang: HoaDon[] = [];
  hoaDonLocTheoThang: HoaDon[] = [];
  //         this.tongSoTien += objectHoaDon.tongSoTien;
  //       }
  //     });
  //   });

  // }
}
