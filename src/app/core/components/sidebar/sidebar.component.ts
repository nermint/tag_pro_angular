import { Component, OnInit } from '@angular/core';
import { sidebarAnimation, iconAnimation, labelAnimation } from 'src/app/animations';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    sidebarAnimation(),
    iconAnimation(),
    labelAnimation(),
  ]
})
export class SidebarComponent implements OnInit {
  sidebarState: string;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.sidenavService.sidebarStateObservable$.
      subscribe((newState: string) => {
        this.sidebarState = newState;
      });

      this.addClickEventToSidebar();
  }
  toggleSideNav() {
    this.sidenavService.toggle();
  }

  addClickEventToSidebar(){
    let items = document.getElementsByClassName('mat-item');
    for(let i=0; i<items.length; i++)
    {
      items[i].addEventListener("click", e =>{
        this.toggleSideNav();
      });
    }
  }

}
