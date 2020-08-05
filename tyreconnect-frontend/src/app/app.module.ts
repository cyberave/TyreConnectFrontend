import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Http client module */
import { HttpClientModule } from '@angular/common/http';

/* Service */
import { CharacterPositionService } from './shared/character-position.service';

/* Forms module */
import { ReactiveFormsModule } from '@angular/forms';

/* Components */
import { TextAnalysisComponent } from './components/analyze-text/analyze-text.component';
import { ApplicationInfoListComponent } from './components/application-info-list/application-info-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TextAnalysisComponent,
    ApplicationInfoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CharacterPositionService],
  bootstrap: [AppComponent]
})

export class AppModule { }