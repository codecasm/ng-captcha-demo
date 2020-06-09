import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecaptchaService {

  constructor(private httpClient: HttpClient) { }

  getCaptcha(){
    return this.httpClient.get(`https://codecasm.com/demo/ng-recaptcha`);
  }
}
