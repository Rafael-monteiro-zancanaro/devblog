import { Component, signal } from '@angular/core';
import { PostCardComponent } from "../../components/post-card/post-card.component";
import { PostCardInfo } from '../../components/post-card/post-card-type';
import { allPosts } from '../../data/posts';

@Component({
  selector: 'app-home',
  imports: [PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  posts = signal<Array<PostCardInfo>>(allPosts.sort((prev, curr) => new Date(curr.createdAt).getTime() - new Date(prev.createdAt).getTime()))

}
