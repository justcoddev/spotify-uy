import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
@HostListener('error') handleError(): void{
  const elNative = this.elHost.nativeElement
  console.log('Esta img revento',this.elHost)
  elNative.src = '../../../assets/images/spot.jpg'
}
  constructor(private elHost: ElementRef) {
    // console.log(elHost)
  }
}
