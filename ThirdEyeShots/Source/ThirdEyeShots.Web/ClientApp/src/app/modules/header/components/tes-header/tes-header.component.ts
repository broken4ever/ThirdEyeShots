import { Component, OnInit } from '@angular/core';
import { TesHeaderService } from '../../services/tes-header.service';
import { HeaderMenuViewModel } from '../../models/tes-header.model';

@Component({
  selector: 'app-tes-header',
  templateUrl: './tes-header.component.html',
  styleUrls: ['./tes-header.component.css']
})
export class TesHeaderComponent implements OnInit {

  headerMenuViewModelList: HeaderMenuViewModel[] = null;
  constructor(private tesHeaderService: TesHeaderService) { }

  ngOnInit() {
    this.headerMenuViewModelList = this.tesHeaderService.getHeaderMenu();
  }

}
