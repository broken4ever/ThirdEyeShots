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
      { MeunuId: 1, Menu: 'Home' },
      { MeunuId: 1, Menu: 'About Me' },
      { MeunuId: 1, Menu: 'Contact Us' }
    ])
  }

  getHeaderMenu(): HeaderMenuViewModel[] {
    return this.headerMenuViewModel;
  }
}
