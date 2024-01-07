import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-postcode-lookup';
  locationInfo: any;
  isShowAllInfo = false;
  errorOutput: string | undefined; 

  // HTTP REQUEST TO INTERACT WITH API TO FETCH DATA
  constructor(private http: HttpClient) {}

  // WHEN BUTTON IS ACTIVATED.  X IS POSTCODE BEING QUERIED
  filter_postcode(x: string): void{

    // DEFINE THE ENDPOINTS
    const postcode_apiQuery = `https://api.postcodes.io/postcodes/${x}`;

    // QUERY POSTCODES INFORMATION
    this.http.get(postcode_apiQuery).subscribe(
      // GET DATA
      (data) => {
        this.locationInfo = data;
      },
      // IF NO DATA RETURNED THEN SHOW ERROR
      (error) => {
        this.errorOutput = "Sorry there are no results for your postcode";
        console.error('no postcode details', error);
      }
    );
    
    // CONSOLE LOG
    console.log("postcode " + x + " query " + postcode_apiQuery);
  };

  // SHOW ALL INFORMATION WHEN 'showAll' BUTTON IS CLICKED
  showAll(){
    this.isShowAllInfo = true;
  }
}
