import { Component, OnInit } from '@angular/core';
import { customer } from '../model/customer-model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{
  title = 'get-post';
  tutorials: customer[] =[];

  constructor(
    private tutorialService: CustomerService
  ) {}

  ngOnInit(): void {
    this.getDataTutorial()
  }

  // Get all data: component
  getDataTutorial(){
    this.tutorialService.getAll().subscribe((item) =>{
      this.tutorials = item
      console.log('success data', item)
    });
  }

  // Get data by ID: component
  getDataTutorialId(id: any){
    this.tutorialService.get(id).subscribe((res) =>{
      console.log('success get data', res)
    })
  }

  // Post data: component
  // deleteDataTutorial(id:any){
  //   this.tutorialService.delete(id).subscribe(() =>{
  //     console.log('success delete data')
  //   })
  // }
}