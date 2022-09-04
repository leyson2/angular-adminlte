import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  about(){
    this.router.navigateByUrl('dashboard/about');
  }

  home(){
    this.router.navigateByUrl('dashboard/home');
  }
}
