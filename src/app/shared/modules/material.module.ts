import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatIconModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  imports: [
    MatCardModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatTableModule
  ]
})
export class MaterialModule {}