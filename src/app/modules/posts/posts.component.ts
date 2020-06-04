import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { NgForm } from '@angular/forms';
import { IPosts } from '../iposts';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 
  constructor(private service : PostsService, private tostr:ToastrService) { } 
   empData:IPosts;

  ngOnInit(): void {

    this.resetForm();
  }

  resetForm( form? :NgForm){
    if(form != null)
      form.resetForm();

    this.empData = this.service._formData = {
      emp_id : null,
      firstName : '',
      lastName : '',
      contactNo : null,
      email : '',
      gender : '',
      password : '',
      username : '',
      date : '',
      address : '',
      city : '',
      country : '',
      role : ''
      
    }
  }

  onSubmit( form : NgForm){
    if(form.value.emp_id == null){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
     }
    
  }

  insertRecord(form :NgForm){
   this.service.postEmployee(form.value).subscribe(res => {
     this.tostr.success("Employee Register Successfully","EMP.Register");
     this.resetForm(form);
   });
  }

  updateRecord(form : NgForm){
    this.service.putEmployee(form.value).subscribe(res => {
      this.tostr.info("Employe Update Successfully", "EMP.Register");
      this.resetForm(form);
      this.service.refreshList();
    });
  }


}
