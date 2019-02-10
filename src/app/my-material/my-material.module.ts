import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule,
    MatButtonModule, MatListModule, MatCardModule
  ],
  exports: [
    MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule,
    MatButtonModule, MatListModule, MatCardModule
  ]
})
export class MyMaterialModule {
}
