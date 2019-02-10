import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() closeSidebar = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onNavigate() {
    this.closeSidebar.emit();
  }

  onLogout() {
    // TODO: logout vis userservice
    this.closeSidebar.emit();
  }
}
