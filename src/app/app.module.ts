import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainVideosComponent } from './main-videos/main-videos.component';
import { SideActivityComponent } from './side-activity/side-activity.component';
import { MainPeopleComponent } from './main-people/main-people.component';
import { SideChannelsComponent } from './side-channels/side-channels.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainVideosComponent,
    SideActivityComponent,
    MainPeopleComponent,
    SideChannelsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
