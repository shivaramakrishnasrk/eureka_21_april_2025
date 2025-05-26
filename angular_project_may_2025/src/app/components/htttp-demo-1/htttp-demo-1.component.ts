import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-httpdemo1',
  imports: [],
  templateUrl: './htttp-demo-1.component.html',
  styleUrl: './htttp-demo-1.component.css'
})
export class Httpdemo1Component {

  user_url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient : HttpClient){
    
  }

  ngOnInit(){
     // this.fetchUserData_angular();
      this.fetchUserData_javascript();
    }

    fetchUserData_angular(){
      this.httpClient.get(this.user_url).subscribe(response => {
        console.log(response);
      })
    }
     fetchUserData_javascript(){  //fetch() returns promise
      fetch(this.user_url).then(respnse=>
      {
        respnse.json().then(finalResponse=>{
          console.log(finalResponse)
        })
      }
      )
        
      }

      // fetchUserData_angular()// httpclient.get() returns ovservable
      // {

      //   this.httpClient.get(this.httpClient.get(user_url))

      // }

}