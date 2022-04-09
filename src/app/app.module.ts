import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsComponent } from './forms/forms.component';

registerAllModules();

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotTableModule,
    ReactiveFormsModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
