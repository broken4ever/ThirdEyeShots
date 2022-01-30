import { Component, OnInit } from '@angular/core';
import { BlogPhotoDetailsViewModel } from '../../models/blog-photodetails.model';
import { BlogPhotodetailsService } from '../../services/blog-photodetails.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blogPhotoDetailsViewModelList: BlogPhotoDetailsViewModel[] = null;
  constructor(private blogPhotodetailsService: BlogPhotodetailsService) { }

  ngOnInit() {
    this.blogPhotoDetailsViewModelList = this.blogPhotodetailsService.getPhotoDetails();
  }

}
