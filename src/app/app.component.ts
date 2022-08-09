import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

interface Obj {
  firstVal: number | undefined;
  secondVal: number | undefined;
}

/*
 * https://angular.io/api/common/NgIf#storing-a-conditional-result-in-a-variable
 */

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  value$: Observable<Obj | undefined> = undefined;

  anObj: Obj = { firstVal: 1, secondVal: undefined };

  ngOnInit(): void {
    this.value$ = new Observable((subscriber) => subscriber.next(this.anObj));
  }

  getType(value: number): string {
    return typeof value;
  }

  calculate(v1: number, v2: number): number {
    console.log(v1, v2);
    return v1 + v2;
  }
}
