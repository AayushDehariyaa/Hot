import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
@Output() userdata = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }
  addforms=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
    dob:new FormControl(''),
    
      })

  public addform(){
    this.userdata.emit(this.addforms.value)
 
    

  }

}
