import { Component } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-gpt-ng';
  // facts:any;
  // constructor(private factsData:MainPageComponent){
  //   this.factsData.facts().subscribe((data:any)=>{
  //     console.warn("Facts Data", data)
  //   })
  // }
}
 