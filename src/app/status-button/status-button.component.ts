import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pipco-status-button',
  templateUrl: './status-button.component.html',
  styleUrls: ['./status-button.component.css']
})
export class StatusButtonComponent implements OnInit {
  @Input() text: string;
  @Input() status: boolean;

  constructor() { }

  ngOnInit() { }
}