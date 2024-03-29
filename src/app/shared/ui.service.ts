import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private snackBar: MatSnackBar) {
  }

  createSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {duration});
  }

}
