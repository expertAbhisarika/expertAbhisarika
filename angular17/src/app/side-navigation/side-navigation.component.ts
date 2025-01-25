import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-side-navigation',
  standalone: true,
  imports: [],
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.css'
})
export class SideNavigationComponent {
  constructor(private service: ServiceService){

  }
  print(){
    console.log(this.service.count, "printted")
  }
}
