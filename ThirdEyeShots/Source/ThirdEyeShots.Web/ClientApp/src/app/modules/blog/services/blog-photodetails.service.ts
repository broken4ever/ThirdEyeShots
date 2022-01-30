import { Injectable } from '@angular/core';
import { BlogPhotoDetailsViewModel } from '../models/blog-photodetails.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPhotodetailsService {
  blogPhotoDetailsViewModelList: BlogPhotoDetailsViewModel[] = null;
  constructor() {
    this.blogPhotoDetailsViewModelList = ([
      { PhotoTitle: 'Jaipur', PhotoDescription: 'Pink City', PhotoSource: '../../../../../assets/Jaipur.jpg' },
      { PhotoTitle: 'Jaisalmer', PhotoDescription: 'Jaisalmer Sand Dunes', PhotoSource: '../../../../../assets/JaisalmerSandDunes.jpg' }
    ])
  }

  getPhotoDetails(): BlogPhotoDetailsViewModel[] {
    return this.blogPhotoDetailsViewModelList;
  }
}
