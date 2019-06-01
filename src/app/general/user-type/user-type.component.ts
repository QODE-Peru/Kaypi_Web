import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToLogin(type: string) {
    localStorage.setItem('user_type', type);
    this.router.navigate(['/login']);
  }

}
