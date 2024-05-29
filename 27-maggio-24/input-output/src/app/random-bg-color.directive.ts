import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomBgColor]'
})
export class RandomBgColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FF8C33','#F39C12', '#8E44AD', '#3498DB', '#E74C3C', '#1ABC9C', // Nuovi colori
    '#2ECC71', '#9B59B6', '#E67E22', '#E74C3C', '#ECF0F1',
    '#95A5A6', '#34495E', '#16A085', '#27AE60', '#2980B9',
    '#D35400', '#C0392B', '#BDC3C7', '#7F8C8D', '#2C3E50'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', randomColor);
  }
}
