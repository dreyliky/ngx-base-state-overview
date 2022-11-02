import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { Observable, Subscription, BehaviorSubject, catchError, finalize, of, tap } from 'rxjs';

@Component({
  selector: 'app-async-container',
  templateUrl: './async-container.component.html',
  styleUrls: ['./async-container.component.scss']
})
export class AsyncContainerComponent {
  @Input()
  public set observable(data$: Observable<unknown>) {
    this.resetAllStatuses();
    this.initDataObserver(data$);
  }

  @ContentChild(TemplateRef)
  public readonly contentTemplateRef!: TemplateRef<unknown>;

  public isLoading$ = new BehaviorSubject(false);
  public isLoaded$ = new BehaviorSubject<unknown>(null);
  public isError$ = new BehaviorSubject(false);

  private _subscription: Subscription | undefined;

  private initDataObserver(data$: Observable<unknown>): void {
    this._subscription?.unsubscribe();
    this.isLoading$.next(true);

    this._subscription = data$
      .pipe(
        tap((data) => this.isLoaded$.next(data)),
        catchError(() => this.setErrorStatus()),
        finalize(() => this.isLoading$.next(false))
      )
      .subscribe();
  }

  private setErrorStatus(): Observable<null> {
    this.isError$.next(true);

    return of(null);
  }

  private resetAllStatuses(): void {
    this.isLoading$.next(false);
    this.isLoaded$.next(null);
    this.isError$.next(false);
  }
}
