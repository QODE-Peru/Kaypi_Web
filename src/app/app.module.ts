import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  
import { ServiceWorkerModule } from '@angular/service-worker';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GeneralModule } from './general/general.module';
import { LocationModule } from './location/location.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      GeneralModule,
      LocationModule,
      UserModule,
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
