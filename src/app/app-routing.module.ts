import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'user/:id', component: DetailsComponent},
  { path: 'user/:id/posts', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
