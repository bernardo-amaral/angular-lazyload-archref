import {
  ChangeDetectorRef,
  EventEmitter,
  Injectable,
  ViewRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  changeDetectorRef!: ChangeDetectorRef;
  onChangeDadosTabela = new EventEmitter();
  selectedComponent: string = 'Screen1Component';

  update() {
    if (
      this.changeDetectorRef !== null &&
      this.changeDetectorRef !== undefined &&
      !(this.changeDetectorRef as ViewRef).destroyed
    ) {
      this.changeDetectorRef.detectChanges();
      this.changeDetectorRef.markForCheck();
    }
  }
}
