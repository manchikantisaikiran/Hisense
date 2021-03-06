import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
import { MarketingVideoComponent } from 'src/app/components/marketing-video/marketing-video.component';
import { SubscribeNowComponent } from 'src/app/components/subscribe-now/subscribe-now.component';
import { MainSliderComponent } from 'src/app/components/main-slider/main-slider.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { SeriesComponent } from 'src/app/components/series/series.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    SubscribeNowComponent,
    MarketingVideoComponent,
    MainSliderComponent,
    AboutComponent,
    SeriesComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    ComponentsModule
  ]
})
export class HomeModule { }
