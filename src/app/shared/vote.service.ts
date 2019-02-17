import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {ApplicationResponse} from '../model/app-repsonse.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private API_URL = `http://localhost:8080/api/v1/`;

  private readonly hasVoted: Subject<boolean>;

  private applicationResponse: ApplicationResponse;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.hasVoted = new Subject();
  }


  voteForMealWithId(mealChoiceId: number) {
    this.httpClient.post<ApplicationResponse>(`${this.API_URL}vote`, {mealId: mealChoiceId}, {
      headers: new HttpHeaders().set('Authorization', this.authService.getBasicAuthToken())
    })
      .subscribe(response => {
        this.applicationResponse = response;
        if (response.isSuccess) {
          this.hasVoted.next(true);
        } else {
          this.hasVoted.next(false);
        }
      });
  }

  revokeVote() {
    this.httpClient.delete<ApplicationResponse>(`${this.API_URL}vote`, {
      headers: new HttpHeaders().set('Authorization', this.authService.getBasicAuthToken())
    })
      .subscribe(response => {
        this.applicationResponse = response;
        if (response.isSuccess) {
          // signal that vote is revoked
          this.hasVoted.next(false);
        } else {
          // signal that vote is still active
          this.hasVoted.next(true);
        }
      });
  }

  getHasVoted(): Subject<boolean> {
    return this.hasVoted;
  }

  getApplicationResponse(): ApplicationResponse {
    return this.applicationResponse;
  }
}
