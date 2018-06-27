import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Logger {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getLogs(){
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8080/api/coffeeLogs')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 
  }
 
  createReview(coffeeLog){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://localhost:8080/api/coffeeLogs', JSON.stringify(coffeeLog), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }
 
  deleteReview(id){
 
    this.http.delete('http://localhost:8080/api/coffeeLogs/' + id).subscribe((res) => {
      console.log(res.json());
    });   
 
  }
 
}
