import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule,
    MatButtonModule, MatListModule
  ],
  exports: [
    MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule,
    MatButtonModule, MatListModule
  ]
})
export class MyMaterialModule {
}
