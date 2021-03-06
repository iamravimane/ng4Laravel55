import { Component } from '@angular/core';


import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://localhost/ng4Laravel55/public/api/quotes').subscribe(data => {
      console.log(data);
    });
  }
}
