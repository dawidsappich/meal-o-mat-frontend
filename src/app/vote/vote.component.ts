import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Meal} from '../model/meal.model';
import {MatRadioChange} from '@angular/material/typings/radio';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  mealChoiceId: number;

  @ViewChild('btn') button: ElementRef;

  meals: Meal[] = [];
  private isVoteDisabled = false;

  constructor() {
  }

  ngOnInit() {
    this.meals.push(
      {
        id: 1,
        name: 'hit_asia',
        displayName: 'Hit Asiate',
        location: {
          city: 'Köln',
          houseNr: '484',
          street: 'Bonner Str.'
        }
      },
      {
        id: 2,
        name: 'italia',
        displayName: 'Italiener',
        location: {
          city: 'Köln',
          houseNr: '484',
          street: 'Bonner Str.'
        }
      }
    );
  }

  onVote() {
    this.isVoteDisabled = true;
    // TODO Sent vote to backend via service
  }

  onSelect(event: MatRadioChange) {
    this.mealChoiceId = event.value;
  }
}
