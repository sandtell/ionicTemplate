import { Component, OnInit  } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage implements OnInit  {

  public newsJSON: any;
  public intLastNewsID:number;
  constructor(
    private config: ConfigService,
    private loadService: LoaderService
  ) {}

  ngOnInit() {
    // this.getData();
  }

  getData(){
    this.loadService.show('Please Wait ...', 'dots');
    const url = this.config.configURL + 'mobileHandlers/newsList.ashx?newsMode=kar';
    this.config.getData(url).subscribe((data) => {
      console.log(data);
      this.newsJSON = data;

      let dataLength = this.newsJSON.length;
      this.intLastNewsID = this.newsJSON[dataLength - 1].newsID;

      this.loadService.hide();
    },error =>{
      console.log(error);
      this.loadService.hide();
    });
  }
  
  doRefresh(event) {
    this.getData();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  loadData(event) {
    setTimeout(() => {
      const infinteURL = this.config.configURL + `mobileHandlers/newsList.ashx?newsMode=kar&lastNewsID=${this.intLastNewsID}`;
      this.config.getData(infinteURL).subscribe((data) => {        
        const newData = data;        
        let dataLength = newData.length;
        this.intLastNewsID =  data[dataLength - 1].newsID;
        for (let i = 0; i < newData.length; i++) {
          this.newsJSON.push(newData[i]);
        }
      }, error => {
        console.log(error);
      });
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }


}
