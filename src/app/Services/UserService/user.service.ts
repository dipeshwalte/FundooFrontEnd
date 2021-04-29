import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpservice: HttpServiceService) {}
  static url = 'https://localhost:44374/api/';

  registration = (data: any) => {
    return this.httpservice.post(`${UserService.url}User/Register`, data);
  };
  login = (data: any) => {
    return this.httpservice.post(`${UserService.url}User/Login`, data);
  };
  forgotPassword = (data: any) => {
    return this.httpservice.post(`${UserService.url}User/ForgetPassword`, data);
  };
  resetPassword = (data: any) => {
    return this.httpservice.post(`${UserService.url}User/ResetPassword`, data);
  };
  createNote = (data: any) => {
    return this.httpservice.post(`${UserService.url}Notes`, data, true, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    });
  };
  getNotes = () => {
    return this.httpservice.get(`${UserService.url}Notes`, true, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    });
  };
  getArchieveNotes = () => {
    return this.httpservice.get(`${UserService.url}Notes/Archieve`, true, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    });
  };
  getTrashNotes = () => {
    return this.httpservice.get(`${UserService.url}Notes/Trash`, true, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    });
  };
  updateColor = (id: number, color: string) => {
    //let params = new HttpParams().set('colorCode', color);
    color=color.replace("#","%23")
    return this.httpservice.put(
      `${UserService.url}Notes/${id}/Color?colorCode=${color}`,{},true,
      {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      }
    );
  };
  deleteNote = (id: number) => {
    return this.httpservice.delete(`${UserService.url}Notes/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    });
  };
  updateNote = (data: any) => {
    //let params = new HttpParams().set('colorCode', color);
    return this.httpservice.put(`${UserService.url}Notes`, data, true, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    });
  };

  archieveNote = (id: number) => {
    //let params = new HttpParams().set('colorCode', color);
    return this.httpservice.put(
      `${UserService.url}Notes/${id}/Archieve?ArchieveFlag=true`,{},true,
      {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      }
    );
  };

  thrashNote = (id: number) => {
    //let params = new HttpParams().set('colorCode', color);
    return this.httpservice.put(
      `${UserService.url}Notes/${id}/Trash?TrashNoteFlag=true`,{},true,
      {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      }
    );
  };


}
