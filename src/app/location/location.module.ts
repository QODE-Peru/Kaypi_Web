import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [SearchComponent, SearchBoxComponent],
  imports: [
    CommonModule
  ]
})
export class LocationModule { }
