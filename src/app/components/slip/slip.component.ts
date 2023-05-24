import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.scss']
})
export class SlipComponent {
  constructor(public _AuthService:AuthService){}
  pdfUrl='assets/Files/Slips/CritiCareSecure - Obelisky Slip - Version 1.pdf'
  f='E:/t.txt'
  
}
