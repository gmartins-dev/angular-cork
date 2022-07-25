import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Input() btnText!: string;
  @Output() onSubmit = new EventEmitter<Moment>();

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
    console.log(this.postForm.value);

    this.onSubmit.emit(this.postForm.value);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.postForm.patchValue({ image: file });
  }
}
