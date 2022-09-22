import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-arg-progr',
  templateUrl: './logo-arg-progr.component.html',
  styleUrls: ['./logo-arg-progr.component.css']
})
export class LogoArgProgrComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 login(){
  this.router.navigate(['/login'])
 }
}
