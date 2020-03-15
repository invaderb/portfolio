import { Component, OnInit } from '@angular/core';
import mixitup from 'mixitup';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let port = mixitup('#portfoliolist', {
      selectors: {
        target: '.portfolio-item'
      },
      animation: {
        effects: 'fade translateZ(-100px)',
        duration: 300
      }  
    })
  }

}
