import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPosts } from '../iposts';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, AfterViewInit {
   displayedColumns = ['emp_id', 'firstName', 'lastName', 'username', 'contactNo', 'gender', 'email','role', 'update','delete'];
   dataSource = new MatTableDataSource<IPosts>();

   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   @ViewChild(MatSort) sort:MatSort;
  
  constructor(public service:PostsService, private router: Router, private toastr:ToastrService) { }
  
  

  ngOnInit(): void {
   this.getAllEmployee();
   this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit():void{
    this.dataSource.sort = this.sort;
  }

   getAllEmployee = () => {
    this.service.refreshList().subscribe(res => {
      this.dataSource.data = res as IPosts[];
    })
  }
  onEdit(emp : IPosts){
    this.populateForm(emp);
    this.router.navigate(['/posts']);
    console.log(emp);
    
  }

  populateForm(emp : IPosts){
    this.service._formData = Object.assign({},emp);
  }

  onDelete(emp_id : number){
    if(confirm("Are you sure want to Delete?")){
    this.service.deleteEmployee(emp_id).subscribe(res=>{
    this.getAllEmployee();
    this.toastr.warning("Delete Employee successfully ","EMP.Register")
    });
  }
  }

  doFilter = ( value :string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();

  }
}
