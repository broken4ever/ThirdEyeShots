import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderMenuViewModel } from '../../header/models/tes-header.model';

@Injectable({
  providedIn: 'root'
})
export class TesHeaderService {
  headerMenuViewModel: HeaderMenuViewModel[] = null;
  constructor() {
    this.headerMenuViewModel = ([
      { MeunuId: 1, Menu: 'HOME', MenuRoute:'/home' },
      { MeunuId: 1, Menu: 'BLOG', MenuRoute: '/blog'  }
    ])
  }

  getHeaderMenu(): HeaderMenuViewModel[] {
    return this.headerMenuViewModel;
  }
}
