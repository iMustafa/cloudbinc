import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scene7Component } from './pages/scene7/scene7.component';
import { SecurityAnalysisComponent } from './pages/security-analysis/security-analysis.component';
import { OperationIntelligenceComponent } from './pages/operation-intelligence/operation-intelligence.component';


const routes: Routes = [
  { path: 'scene7', component: Scene7Component },
  { path: 'security-analytics', component: SecurityAnalysisComponent },
  { path: 'operation-visibility', component: OperationIntelligenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
