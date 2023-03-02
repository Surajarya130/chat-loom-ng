import { Component, ElementRef, ViewChild } from '@angular/core';
// import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  // url= "https://www.boredapi.com/api/activity";
  // title = "Get input val";
  // constructor(private http:HttpClient){ }
  // facts(){
  //   return this.http.get(this.url)
  // }


  @ViewChild('box') box: ElementRef | any;

  qna:any = [
    {
    q: "How May I help you",
    a: undefined,
    }
  ]


  getValue(value:any){
    console.warn(value)
  }
  handleSendClick(chatPrompt:any){
    console.log(chatPrompt)
    if (chatPrompt.trim().length !== 0) {
      // this.qna.push([{ q: chatPrompt, a: "Test" }])
      this.qna = [...this.qna, { q: chatPrompt, a: "Test" }]
      console.log(this.qna)
      this.box.nativeElement.value = ""
      
    } else {
      console.log("Not Valid Text")
    }
  }

}
