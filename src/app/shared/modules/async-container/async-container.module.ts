import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncContainerComponent } from './async-container.component';

@NgModule({
  declarations: [
    AsyncContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsyncContainerComponent
  ]
})
export class AsyncContainerModule {}
