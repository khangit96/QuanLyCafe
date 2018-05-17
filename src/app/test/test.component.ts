import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UploadService } from 'app/shared/upload.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DataService } from 'app/shared/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();
  classXemChiTiet = 'w3-bar-item w3-button w3-gray';
  classChinhSua = 'w3-bar-item w3-button w3-green';
  displayXemChiTiet = true;
  displayChinhSua = false;
  test = true;
  selectedFiles: FileList;
  base64Img: string;
  @ViewChild("tref", { read: ElementRef }) tref: ElementRef;
  message: string;

  ngOnInit() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post('https://sincere-crawdad.glitch.me/khang', { moo: "foo", goo: "loo" }, options).subscribe(res =>
      console.log(res.text()));
  }

  constructor(public http: Http, public uploadService: UploadService) { }

  // ngOnInit() {
  //  // this.onDatePicked.emit('khang vinh');
  // }

  //   detectFiles(event) {
  //     this.selectedFiles = event.target.files;
  //   }

  //   uploadSingle() {
  //     // let file = this.selectedFiles.item(0);
  //     // var myReader: FileReader = new FileReader();

  //     // myReader.onloadend = (e) => {
  //     //   this.base64Img = myReader.result;
  //     //   // this.uploadService.uploadImg('d').subscribe(res=>{
  //     //   //   console.log("Khang: "+res);
  //     //   // });
  //     //   let hd = new Headers();
  //     //     hd.append('Content-Type','application/json');
  //     //     hd.append('Access-Control-Allow-Origin','*');
  //     // let options = new RequestOptions({headers: hd});

  //     //   this.http.post('http://203.162.76.251:8000/api/upload-img', {moo:"foo",goo:"loo"},options).subscribe(res => console.log(res.json()));
  //     // }
  //     // myReader.readAsDataURL(file);
  //     // let tsnString = (document.getElementById("khang") as  HTMLParagraphElement).nodeValue;
  //     // alert(this.tref.nativeElement.textContent);
  //   }

  //  clickChucNang(chucNang:string){
  //     if(chucNang=='xemChiTiet'){
  //        this.displayXemChiTiet=true;
  //        this.displayChinhSua=false;

  //        this.classXemChiTiet='w3-bar-item w3-button w3-gray';
  //        this.classChinhSua='w3-bar-item w3-button w3-green'
  //     }
  //     else{
  //       this.displayChinhSua=true;
  //       this.displayXemChiTiet=false;

  //       this.classXemChiTiet='w3-bar-item w3-button w3-green';
  //       this.classChinhSua='w3-bar-item w3-button w3-gray'
  //     }
  //  }
}
