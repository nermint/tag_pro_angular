import { Component, OnInit } from '@angular/core';
import { mainContentAnimation } from './animations';
import { SidenavService } from './core/services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    mainContentAnimation()
  ]
})
export class AppComponent implements OnInit{

  sidebarState: string;

  constructor(
    private sidenavService:SidenavService
  ){ }

  ngOnInit(){
    this.sidenavService.sidebarStateObservable$
    .subscribe((newState: string) => {
      this.sidebarState = newState;
    });

    
  }

}
