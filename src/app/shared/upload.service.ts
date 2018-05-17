import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions } from '@angular/http';

@Injectable()
export class UploadService {
  baseUrl = 'http://203.162.76.251:8000/api/upload-img';

  constructor(private http: Http) { }

  uploadImg(base64Img: string) {

     let object={'base64Img':base64Img};
     return this.http.post(this.baseUrl,object).map(res=>res.json());
  }

}
