import { RouterModule } from '@angular/router';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { ErrorHandler } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorComponent } from './global-error/global-error.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NotFoundComponent, GlobalErrorComponent],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }]
})
export class ErrorsModule { }
