import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Input() btnText!: string;

  constructor() {}

  ngOnInit(): void {}
}
