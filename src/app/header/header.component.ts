import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  links: Object[] = [
    {link: 'devices', text: 'Devices'},
    {link: 'certificates', text: 'Manage Cretificates'},
    {link: 'blockedDevices', text: 'Blocked Devices'},
    {link: 'settings', text: 'Settings'}
  ];

  ngOnInit() {
  }

}
