import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDemo]'
})
export class MyDemoDirective {

  constructor(private element: ElementRef) {

    console.log(element)

  }

  ngOnInit() {
    debugger
    // if(this.element.nativeElement.id)
    this.element.nativeElement.style.backgroundColor = "green";
  }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initial = event.target.value;
    event.target.value = initial.replace(/[^a-zA-Z]/g, '');
  }
  
  @HostListener("mouseenter") OnMouseEnter() 
  {
    this.element.nativeElement.style.backgroundColor = "Yellow";

  }

  @HostListener("mouseleave") OnMouseLeave() 
  {
    this.element.nativeElement.style.backgroundColor = "Green";

  }


}
