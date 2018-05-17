import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ThucUong } from 'app/shared/thuc-uong';
import { CurrencyPipe } from '@angular/common';
import { DataService } from 'app/shared/data.service';
@Component({
  selector: 'app-thuc-uong',
  templateUrl: './thuc-uong.component.html',
  styleUrls: ['./thuc-uong.component.css']
})
export class ThucUongComponent implements OnInit {
  danhSachThucuong:ThucUong[]=[];
  classXemChiTiet='w3-bar-item w3-button w3-gray';
  classChinhSua='w3-bar-item w3-button w3-green';
  displayXemChiTiet=true;
  displayChinhSua=false;
  thucUongSelected:ThucUong={ten:'',gia:0,moTa:'',hinhAnh:''};

  constructor(public db: AngularFireDatabase,public dataService:DataService) { }

  ngOnInit() {
    this.dataService.changeMessage('false');
    const items =this.db.list('ThucUong');
    items.snapshotChanges()
     .subscribe(actions => {
       this.danhSachThucuong=[];
       actions.forEach(action => {
           let objectThucUong=action.payload.val();
           let thucUong={ten:objectThucUong.ten,gia:objectThucUong.gia,
            moTa:objectThucUong.moTa,hinhAnh:objectThucUong.hinhAnh,key:action.key};
           this.danhSachThucuong.push(thucUong);
           this.dataService.changeMessage('true');

       });

     });
  }

  onSubmit(f: NgForm) {
    const item = this.db.list("ThucUong");
    let thucUong: ThucUong = { ten:f.value.ten, gia:Number(f.value.gia),moTa:f.value.moTa, hinhAnh:'http://yucha.com.vn/image/catalog/san-pham/tra-trai-cay/Tr%C3%A0%20%C4%90%C3%A0o.jpg'};
    item.push(thucUong);
  }

  xemThucUong(thucUong:ThucUong){
    this.thucUongSelected=thucUong;
  }

  xoaThucUong(){
    this.db.object('/ThucUong/'+this.thucUongSelected.key).remove();
  }

  capNhat(){
    this.db.object('/ThucUong/'+this.thucUongSelected.key).update(this.thucUongSelected);
  }

  clickChucNang(chucNang:string){
    if(chucNang=='xemChiTiet'){
       this.displayXemChiTiet=true;
       this.displayChinhSua=false;

       this.classXemChiTiet='w3-bar-item w3-button w3-gray';
       this.classChinhSua='w3-bar-item w3-button w3-green'
    }
    else{
      this.displayChinhSua=true;
      this.displayXemChiTiet=false;

      this.classXemChiTiet='w3-bar-item w3-button w3-green';
      this.classChinhSua='w3-bar-item w3-button w3-gray'
    }
 }
}
