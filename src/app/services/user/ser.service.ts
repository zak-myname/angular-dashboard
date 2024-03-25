import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private http : HttpClient) { }

  verifi(){
    const t = localStorage.getItem('user') ;
    if(t == null){
      return null;
    }else{
      return JSON.parse(t)
    }
  }


  private url = 'http://localhost:3000';
  log(user :any){
    return this.http.post(this.url+'/login',user);
  };
  sign(user :any){
    return this.http.post(this.url+'/sign',user)
  }

  getall(token: any){
    return this.http.post(this.url+'/user/get-users',token,{observe:'response'})
  }

  delId(id :any){
    return this.http.delete(this.url+"/user/del-user-id/"+id)
  }

  putId(user :any){
    return this.http.put(this.url+"/user/put-user-id/"+user._id,user)
  }

  getId(id :any){
    return this.http.get(this.url+"/user/get-user-id/"+String(id))
  }


  //access
  
  add_type_access(access: any){
    return this.http.post(this.url+"/access/add-type-access",access)
  };

  addAccess(access: any){
    return this.http.post(this.url+"/access/add-access",access)
  }

  getAccess(id: any){
    return this.http.get(this.url+"/access/get-access-id/"+id)
  }

  putAccess(access: any){
    return this.http.put(this.url+"/access/put-access-id/"+access.idUser,access)
  }

  delAccess(id: any){
    return this.http.delete(this.url+"/access/del-access-id/"+id)
  }
}
