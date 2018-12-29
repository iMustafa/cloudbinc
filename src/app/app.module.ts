import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);
import { TagCloudModule } from 'angular-tag-cloud-module';

import { AppRoutingModule } from './app.router';

import { MaterialModule } from './shared/modules/material.module';

import { NavbarComponent } from './shared/layout-components/navbar/navbar.component';
import { TimelineElementComponent } from './shared/layout-components/timeline-element/timeline-element.component';

import { AppComponent } from './bootstrap/app.component';
import { Scene7Component } from './pages/scene7/scene7.component';
import { SecurityAnalysisComponent } from './pages/security-analysis/security-analysis.component';
import { OperationIntelligenceComponent } from './pages/operation-intelligence/operation-intelligence.component';

@NgModule({
  declarations: [
    AppComponent,
    Scene7Component,
    NavbarComponent,
    SecurityAnalysisComponent,
    TimelineElementComponent,
    OperationIntelligenceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FusionChartsModule,
    MaterialModule,
    TagCloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
