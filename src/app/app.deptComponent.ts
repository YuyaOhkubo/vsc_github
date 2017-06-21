import { Component } from '@angular/core';

@Component({
  selector: 'dept-app',
  template: `<h1>DeptCode {{name}}</h1>`,
})
export class DeptComponent  { name = 'Angular'; }
