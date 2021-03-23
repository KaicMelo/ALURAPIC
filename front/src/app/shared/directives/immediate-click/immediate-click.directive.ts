import { Directive, ElementRef, OnInit } from "@angular/core";
import { PlatformDetectionService } from "src/app/core/platform-detector/platform-detector.service";

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private platFormDetector: PlatformDetectionService
  ) {}

  ngOnInit(): void {
    this.platFormDetector.isPlatformBrowser() && this.element.nativeElement.click();
  }
}