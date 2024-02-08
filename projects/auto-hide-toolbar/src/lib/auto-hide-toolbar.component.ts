import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

const pxCutterKey = 'px'; // for perf;
const zero = 0;

@Component({
  selector: 'lib-auto-hide-toolbar',
  standalone: true,
  imports: [],
  template: `
  <div class="host">
  <div
    [style.bottom.px]="shadowPadding"
    #fallingHeader
    class="falling-header"
  >
    <ng-content></ng-content>
  </div>
</div>
<div
  [style.height.px]="constHeaderHeightForPadding"
  style="width: 100%;"
></div>
  `,
  styles: `
  .host {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    overflow: hidden;
    height: inherit;
    z-index: 100;
    background-color: transparent;
  }
  .falling-header {
    position: absolute;
    left: 0px;
    right: 0px;
  }
  `
})
export class AutoHideToolbarComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input({required: true})
  shadowPadding!: number;

  @ViewChild('fallingHeader') fallingHeaderEl!: ElementRef;

  public constHeaderHeightForPadding = 0;
  public constHeaderHeight!: number;
  private lastScrollPos = window.scrollY;
  private hostEl!: { height: string };
  private isHeaderVisible = true;
  private isHeaderFullyRestored = true;

  private readonly onScrollMethod = this.onScroll.bind(this);

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScrollMethod);
  }

  ngAfterViewInit(): void {
    this.hostEl = this.el.nativeElement.style;
    this.constHeaderHeight =
      this.fallingHeaderEl.nativeElement.offsetHeight + +this.shadowPadding;
    this.newHeaderHeight = this.constHeaderHeight;
    window.addEventListener('scroll', this.onScrollMethod);
    this.onScroll(); // initialize
    setTimeout(this.activatePadding.bind(this));
  }
  private activatePadding(): void {
    this.constHeaderHeightForPadding = this.constHeaderHeight;
  }
  private set newHeaderHeight(val: number) {
    this.hostEl.height = val + pxCutterKey;
    this.isHeaderVisible = val > zero;
    this.isHeaderFullyRestored = val === this.constHeaderHeight;
  }
  private onScroll(): void {
    const sy = window.scrollY;
    const diff = this.lastScrollPos - sy;

    if (diff < zero) {
      // up
      if (this.isHeaderVisible) {
        const currentH = +this.hostEl.height.split(pxCutterKey)[zero];
        if (-diff > currentH) {
          this.newHeaderHeight = zero;
        } else {
          this.newHeaderHeight = currentH + diff;
        }
      }
    } else {
      if (!this.isHeaderFullyRestored) {
        const currentH = +this.hostEl.height.split(pxCutterKey)[zero];
        if (currentH < this.constHeaderHeight) {
          const newH = currentH + diff;
          if (newH > this.constHeaderHeight) {
            this.newHeaderHeight = this.constHeaderHeight;
          } else {
            this.newHeaderHeight = newH;
          }
        } else if (currentH > this.constHeaderHeight) {
          this.newHeaderHeight = this.constHeaderHeight;
        }
      }
    }

    this.lastScrollPos = sy;
  }
}
