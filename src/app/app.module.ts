import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [AppComponent, SearchComponent, ListComponent, SearchPipe],
  imports: [BrowserModule],
  providers: [ListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
