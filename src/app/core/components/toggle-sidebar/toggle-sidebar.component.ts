import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-toggle-sidebar',
  templateUrl: './toggle-sidebar.component.html',
  styleUrls: ['./toggle-sidebar.component.css']
})
export class ToggleSidebarComponent implements OnInit {

  constructor(
    private sidenavService: SidenavService,
  ) { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.sidenavService.toggle();
  }

}
