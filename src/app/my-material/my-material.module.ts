import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatRadioModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule,
    MatButtonModule, MatListModule, MatCardModule, MatSnackBarModule, MatRadioModule
  ],
  exports: [
    MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule,
    MatButtonModule, MatListModule, MatCardModule, MatSnackBarModule, MatRadioModule
  ]
})
export class MyMaterialModule {
}
