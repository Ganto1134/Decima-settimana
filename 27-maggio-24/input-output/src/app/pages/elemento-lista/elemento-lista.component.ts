import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../post.service';
import { iPost } from'../../Models/i-post';

interface Post {
  title: string;
  body: string;
  tags: string[];
  active: boolean;
}

@Component({
  selector: 'app-elemento-lista',
  templateUrl: './elemento-lista.component.html',
  styleUrls: ['./elemento-lista.component.scss']
})
export class ElementoListaComponent implements OnInit {

  @Input() post!:iPost

  posts: Post[] | undefined;
  allTags: string[] | undefined;
  selectedTag: string | null = null;
  showForm: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.allTags = this.getAllTags();
  }

  getAllTags(): string[] {
    const tagsSet = new Set<string>();
    if (this.posts) {
      this.posts.forEach(post => post.tags.forEach(tag => tagsSet.add(tag)));
    }
    return Array.from(tagsSet);
  }

  filterPosts(tag: string) {
    this.selectedTag = tag;
    this.posts = this.postService.filterPostsByTag(tag);
  }

  clearFilter() {
    this.selectedTag = null;
    this.posts = this.postService.getPosts();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  updatePost() {
  }

  inviaPost(post: Post) {
  }

}
