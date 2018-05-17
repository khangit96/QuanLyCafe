
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  items: Observable<any>;
  constructor(public db: AngularFireDatabase, private route: ActivatedRoute) {
    //   this.items=db.list('/test').valueChanges();
    this.items = db.object('denlon/tinhtrang').valueChanges();
  }

  batDenLon(){
    const item =this.db.object("denlon");
    item.set({ tinhtrang:true});
  }
  tatDenLon(){
    const item =this.db.object("denlon");
    item.set({ tinhtrang:false});
  }

  batDenNho(){
    const item =this.db.object("dennho");
    item.set({ tinhtrang:true});
  }
  tatDenNho(){
    const item =this.db.object("dennho");
    item.set({ tinhtrang:false});
  }
  batTatCa(){
    const item1 =this.db.object("dennho");
    item1.set({ tinhtrang:true});
    const item2 =this.db.object("denlon");
    item2.set({ tinhtrang:true});
  }
  tatTatCa(){
    const item1 =this.db.object("denlon");
    item1.set({ tinhtrang:false});
    const item2 =this.db.object("dennho");
    item2.set({ tinhtrang:false});
  }
  ngOnInit() {

  }

}
