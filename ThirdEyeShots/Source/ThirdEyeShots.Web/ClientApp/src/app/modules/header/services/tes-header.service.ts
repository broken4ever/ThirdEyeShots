import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderMenuViewModel } from '../../header/models/tes-header.model';

@Injectable({
  providedIn: 'root'
})
export class TesHeaderService {
  headerMenuViewModelList: HeaderMenuViewModel[] = null;
  constructor() {
    this.headerMenuViewModelList = ([
      { MeunuId: 1, Menu: 'HOME', MenuRoute:'/home' },
      { MeunuId: 1, Menu: 'BLOG', MenuRoute: '/blog'  }
    ])
  }

  getHeaderMenu(): HeaderMenuViewModel[] {
    return this.headerMenuViewModelList;
  }
}
