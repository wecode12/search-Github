import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
// import { DirectiveHighlightPipe } from './directive-highlight.pipe';
import { HighlightDirective} from '../app/directive-highlight.pipe';
import { RepoComponent } from './repo/repo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { SearchService } from './search/search.component';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    HighlightDirective,
    RepoComponent,
    HeaderComponent,
    FooterComponent,
    // SearchService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
