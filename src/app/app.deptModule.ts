import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DeptComponent }  from './app.deptComponent';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ DeptComponent ],
  bootstrap:    [ DeptComponent ]
})
export class DeptModule { }
