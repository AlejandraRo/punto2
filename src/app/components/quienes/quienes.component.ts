import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.component.html',
  styleUrls: ['./quienes.component.css']
})
export class QuienesComponent implements OnInit {
  
  public sesion:any;
  constructor(public auth:AuthService) {
    this.sesion=false;
  
   }
  
  ngOnInit(): void {
  }

  isAuthenticated():any{
    return this.auth.isAuthenticated$
        
  }
}

