
import { Component } from '@angular/core';

@Component({
  selector: 'simple-form',
  templateUrl: 'app.simpleform.html'
})
export class SimpleFormComponent {
  //這邊設定提交後要幹嘛，目前只是 Console.log 出資料而已
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }
}