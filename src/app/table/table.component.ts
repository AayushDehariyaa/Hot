import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Handsontable from 'handsontable';
import { UserdataService } from '../service/userdata.service';
import { HotTableRegisterer } from '@handsontable/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataset
  @Output() addrowemitter = new EventEmitter(); 

  index=0;
  amount=0;

  private hotRegisterer = new HotTableRegisterer();
  id = 'hotInstance'; 

  hotSettings: Handsontable.GridSettings = {
    className: 'custom-table',
    width: '100%',
    rowHeaders: true,
    colWidths: 100,
    colHeaders: true,
    contextMenu: true,
    columnSorting: true,
    manualColumnResize: true,
    manualRowResize: true,
    height: 'auto',
    stretchH: 'all',
    
     //mergeCells: [
       //{ row: 1, col: 1, rowspan: 3, colspan: 3 },
       //{ row: 3, col: 4, rowspan: 2, colspan: 2 },
       //{ row: 5, col: 6, rowspan: 3, colspan: 3 }
     //],

    
  
  
    licenseKey: 'non-commercial-and-evaluation'
  };

  public addRow(userdata){
    console.log(userdata)
    let hot = this.hotRegisterer.getInstance(this.id);
    let row = hot.countRows();
    hot.alter('insert_row');
    hot.setDataAtCell(row, 0, userdata.firstName);
    hot.setDataAtCell(row, 1, userdata.lastName);
    hot.setDataAtCell(row, 2, userdata.email);
    hot.setDataAtCell(row, 3, userdata.dob);


  }
  
  public deleteRow(index,amount){
      this.hotRegisterer.getInstance(this.id).alter('remove_row',index-1,amount);


  }

  public addRowAbove(){
    let hot = this.hotRegisterer.getInstance(this.id);
    let row = hot.countRows();
    hot.alter('insert_row',0)

  }

  ngOnInit(): void {
  }

  public formsHandler(userdata: any){
console.log(userdata)
this.addRow(userdata)

  }

}
