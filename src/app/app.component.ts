import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ParticlesConfig } from './models/particles.config';
declare let tsParticles: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'Braydon Harris';

  ngOnInit(): void {
    
  }

  ngAfterContentInit(): void {
    this.initParticles();
  }

  private initParticles(): void {
    tsParticles.load("stars", ParticlesConfig);
  }
}
