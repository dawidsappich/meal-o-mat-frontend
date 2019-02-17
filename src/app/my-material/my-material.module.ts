import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule,
    MatButtonModule, MatListModule, MatCardModule, MatSnackBarModule
  ],
  exports: [
    MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule,
    MatButtonModule, MatListModule, MatCardModule, MatSnackBarModule
  ]
})
export class MyMaterialModule {
}
