import { Injectable } from '@angular/core';
import { IPosts } from './iposts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  readonly rootUrl = "http://localhost:33245/api";
   _formData: IPosts;
  
  public get formData(): IPosts {
    return this._formData;
  }
  public set formData(value: IPosts) {
    this._formData = value;
  }

  constructor(private http : HttpClient) { }

  postEmployee( _formData: IPosts){
   return this.http.post(this.rootUrl+'/employees',_formData);
  }

  refreshList(){
   return this.http.get(this.rootUrl+'/employees');
  }

  putEmployee(_formData:IPosts){
   return this.http.put(this.rootUrl+'/employees/'+_formData.emp_id,_formData); 
  }

  deleteEmployee(emp_id :number){
   return this.http.delete(this.rootUrl+'/employees/'+emp_id);
  }
}
