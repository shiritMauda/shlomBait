import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientComponent } from '../contents/client/client.component';
import { CareLogComponent } from '../contents/care-log/care-log.component';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, BodyComponent, NavbarComponent,
    ClientComponent, CareLogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
