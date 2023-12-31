import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/movies.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() movies?:Movie[];
  
  movieSwiper: Swiper | any;
  movie:Movie[] = []

  constructor( private router:Router ) {}
  
  ngOnInit(): void {
    //console.log(this.movies);
  }
  ngAfterViewInit(): void {
    this.movieSwiper = new Swiper('.swiper-container-1', {
      loop: true,
    })
  }

  onSlidePrev() {
    this.movieSwiper.slidePrev();
  }

  onSlideNext() {
    this.movieSwiper.slideNext();
  }

  onClickdetailView(movie: Movie) {
    this.router.navigate(['/movie', movie.id])
  }
}
