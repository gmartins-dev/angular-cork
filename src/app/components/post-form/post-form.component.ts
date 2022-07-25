import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Input() btnText!: string;

  postForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title() {
    return this.postForm.get('title')!;
  }

  get description() {
    return this.postForm.get('description')!;
  }

  submit() {
    if (this.postForm.invalid) {
      return;
    }

    console.log('envio formulario test');
  }
}
