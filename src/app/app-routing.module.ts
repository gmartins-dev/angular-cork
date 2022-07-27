import { EditPostComponent } from './components/pages/edit-post/edit-post.component';
import { PostComponent } from './components/pages/post/post.component';
import { NewPostComponent } from './components/pages/new-post/new-post.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts/new', component: NewPostComponent },
  { path: 'posts/edit/:id', component: EditPostComponent },
  { path: 'posts/:id', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
