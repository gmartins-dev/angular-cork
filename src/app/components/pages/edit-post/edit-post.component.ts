import { MessagesService } from 'src/app/services/messages.service';
import { PostService } from 'src/app/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  post!: Moment;
  btnText: string = 'Editar';

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.postService.getPost(id).subscribe((item) => {
      this.post = item.data;
    });
  }

  async editHandler(postData: Moment) {
    const id = this.post.id;

    const formData = new FormData();

    formData.append('title', postData.title);
    formData.append('description', postData.description);

    if (postData.image) {
      formData.append('image', postData.image);
    }

    await this.postService.updatePost(id!, formData).subscribe();

    this.messageService.add(`Post ${id} foi atualizado com sucesso!`);

    this.router.navigate(['/']);
  }
}
