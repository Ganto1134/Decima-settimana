import { Component } from '@angular/core';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.scss'
})
export class PhotoListComponent {

  photos: any[] = [];
  likedPhotos: Set<number> = new Set();
  errorMessage: string = '';

  constructor(private photoService: PhotosService) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.photoService.getPhotos().subscribe({
      next: (photos) => this.photos = photos,
      error: (err) => this.errorMessage = err
    });
  }

  deletePhoto(photoId: number): void {
    this.photoService.deletePhoto(photoId).subscribe({
      next: () => {
        this.photos = this.photos.filter(photo => photo.id !== photoId);
        this.likedPhotos.delete(photoId); // Remove from liked photos if deleted
      },
      error: (err) => this.errorMessage = err
    });
  }

  toggleLike(photoId: number): void {
    if (this.likedPhotos.has(photoId)) {
      this.likedPhotos.delete(photoId);
    } else {
      this.likedPhotos.add(photoId);
    }
  }

  get likedCount(): number {
    return this.likedPhotos.size;
  }
}
