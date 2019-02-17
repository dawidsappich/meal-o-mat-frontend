import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meal} from '../model/meal.model';
import {MatRadioChange} from '@angular/material/typings/radio';
import {VoteService} from '../shared/vote.service';
import {Subscription} from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {MealService} from '../shared/meal.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit, OnDestroy {

  private isVoteDisabled = false;

  private mealChoiceId: number;

  meals: Meal[] = [];

  private responseMessage: string;
  private voteSubscription: Subscription;

  constructor(private voteService: VoteService, private snackBar: MatSnackBar, private mealService: MealService) {
  }

  ngOnInit() {
    this.mealService.getAllMeals().subscribe(response => this.meals = response);
  }

  onVote() {
    this.voteService.voteForMealWithId(this.mealChoiceId);
    this.voteSubscription = this.voteService.getHasVoted()
      .subscribe(hasVoted => {
        this.isVoteDisabled = hasVoted;
        this.responseMessage = this.voteService.getApplicationResponse().message;
        this.snackBar.open(this.responseMessage, 'Dismiss');
      });
    this.isVoteDisabled = true;
  }

  onRevoke() {
    this.voteService.revokeVote();
    this.isVoteDisabled = false;
  }

  onSelect(event: MatRadioChange) {
    this.mealChoiceId = event.value;
  }

  ngOnDestroy(): void {
    this.voteSubscription.unsubscribe();
  }
}
