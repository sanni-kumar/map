import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { StudentComponent } from './student/student.component';
import { ObservComponent } from './observ/observ.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CountryMapComponent } from './country-map/country-map.component';
import { MapComponent } from './map/map.component';
import {AgmCoreModule} from '@agm/core'
import { Geolocation } from '@awesome-cordova-plugins/geolocation';
import { NewmapComponent } from './newmap/newmap.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    StudentComponent,
    ObservComponent,
    DynamicTableComponent,
    ReplaySubjectComponent,
    CountryMapComponent,
    MapComponent,
    NewmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgSelectModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC4e5ZxcqXIs3t5QKS0b5xfaTb3CAyA5LA',
      libraries:['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
