import { Component, OnInit, AfterContentInit } from '@angular/core';
import mixitup from 'mixitup';
import { PrismicService } from '../services/prismic.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public items;
  constructor(
    private prismic: PrismicService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems(){
    return this.prismic.getAll().subscribe(x => {
      this.items = x.results;
      setTimeout(() => {
        mixitup('#portfoliolist', {
          selectors: {
            target: '.portfolio-item'
          },
          animation: {
            effects: 'fade translateZ(-100px)',
            duration: 300
          }  
        });
      }, 100);
    })
  }

}
