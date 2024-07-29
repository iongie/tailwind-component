import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides = [
    '../assets/image-1.jpg',
    '../assets/image-2.jpg',
    '../assets/image-3.jpg',
    '../assets/image-4.jpg',
    '../assets/image-2.jpg'
  ];

  currentSlide = 0;

  getTransform() {
    console.log(`-${this.currentSlide * (100)}%`, this.currentSlide);

    // if (this.currentSlide == 0) {
    //   return `translateX(0%)`
    // } else if (this.currentSlide == 1) {
    //   return `translateX(-66.6666%)`
    // } else if (this.currentSlide == this.slides.length-1){
    //   return `translateX(-200%)`
    // } else {
    //   return `translateX(-138%)`
    // }
    return `translateX(-${this.currentSlide * (100)}%)`;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
