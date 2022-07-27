import { MessagesService } from 'src/app/services/messages.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Moment } from 'src/app/Moment';
import { Router, ActivatedRoute } from '@angular/router';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post?: Moment;
  faTimes = faTimes;
  faEdit = faEdit;
  baseApiUrl = environment.baseApiUrl;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.postService.getPost(id).subscribe((item) => (this.post = item.data));
  }

  // async removeHandler(id: number) {
  //   if (id) {
  //     await this.postService.removeMoment(id).subscribe();

  //     this.MessagesService.add(`Post excluído com sucesso!`);

  //     this.Router.navigate(['/']);
  //   }
  // }

  // (click)="removeHandler(post.id!)
}
