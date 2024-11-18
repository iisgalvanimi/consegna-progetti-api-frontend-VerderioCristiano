import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
 selector: 'app-foo',
 templateUrl: './foo.component.html',
 styleUrls: ['./foo.component.css']
})


export class FooComponent {
   data!: Object; //Il ‘!’ serve a creare variabili non inizializzate
   loading: boolean=false;
   o! :Observable<Object>;
   constructor(public http: HttpClient) {
    this.http = http;

   }
   makeRequest(): void {
     this.loading = true;
     this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
     this.o.subscribe(this.getData);
   }
   getData = (d : Object) =>
   {
     this.data = new Object(d);
     this.loading = false;
   }


   //L'operazione di post necessita un parametro in più.
//Viene creata una stringa (JSON.strigify) a partire da un oggetto Typescript
 makeCompactPost(): void {
  this.loading = true;
  this.http
    .post('https://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
      })
    )
    .subscribe((data) => {
      this.data = data;
      this.loading = false;
    });
}


  }
