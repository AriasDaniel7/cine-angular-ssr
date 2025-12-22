import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import { Movie } from '@core/movie/domain/models/movie.model';

import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'home-carousel',
  imports: [NgOptimizedImage],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Carousel implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);

  movies = input.required<Movie[]>();
  isLoading = input<boolean>(false);
  swiperEl = viewChild<ElementRef<SwiperContainer>>('swiper');

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeSwiper();
    }
  }

  private initializeSwiper() {
    const swiperEl = this.swiperEl();

    if (!swiperEl) return;

    const swiperOptions: SwiperOptions = {
      slidesPerView: 2,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: true,
      pagination: {
        clickable: true,
      },
    };

    Object.assign(swiperEl.nativeElement, swiperOptions);
    swiperEl.nativeElement.initialize();
  }
}
