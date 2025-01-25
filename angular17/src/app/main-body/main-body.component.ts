import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomPipePipe } from '../custom-pipe.pipe';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [FormsModule, CommonModule, CustomPipePipe],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent implements OnInit{
  searchString: string = '';
  isRadioA: string = '';
  message = 'You are good girl';
  data = ["abhi","vansh","abc","kusum","santosh","ishu"];
  backupData = this.data;
  constructor(private service : ServiceService){

  }
  ngOnInit(): void {
    
  }

  increase(){
    this.service.count++;
  }

  print(){
    console.log(this.service.count,"count");

  }

  debounce(func: Function, delay: any){
    return function(){
      setTimeout(()=>{
        func()
      },delay)
    }
  }
  
  callDebounce(){
    this.debounce(this.getSearchData,5000)
  }
  getSearchData(){
    
    let filteredData = this.backupData;
    this.backupData = this.searchString && this.searchString!=''?filteredData.filter((d:any)=>d.includes(this.searchString)):this.data;
    console.log(this.searchString=='',this.data,filteredData,"jhjhgh");

  }
  
  showDiv(val:string){
    this.isRadioA = val;
  }
  

}
