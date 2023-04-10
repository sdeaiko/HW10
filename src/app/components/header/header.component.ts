import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // определяем, насколько прокручена страница
    const yOffset = window.pageYOffset;
    const threshold = 50;
    // устанавливаем значение isScrolled в true, если страница прокручена на определенное расстояние
    this.isScrolled = yOffset >= threshold;
  }
}
