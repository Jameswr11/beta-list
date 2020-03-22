import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bl-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Input() label: string;
  constructor() { }

  ngOnInit(): void {
  }

}
