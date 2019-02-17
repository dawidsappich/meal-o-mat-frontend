import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Meal} from '../model/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllMeals() {
    return this.httpClient.get<Meal[]>(`${environment.API_URL}meal`, {
      headers: new HttpHeaders().set('Authorization', this.authService.getBasicAuthToken())
    });
  }
}
