import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextAnalysisComponent } from './components/analyze-text/analyze-text.component';
import { ApplicationInfoListComponent } from './components/application-info-list/application-info-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'analyze-text' },
  { path: 'analyze-text', component: TextAnalysisComponent },
  { path: 'application-info-list', component: ApplicationInfoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
