import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgOptimizedImage } from "@angular/common";
import { HomeComponent } from './components/home/home.component';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { HttpClientModule } from "@angular/common/http";
import { DrugCardComponent } from './components/drug-card/drug-card.component';
import { ChipModule } from "primeng/chip";
import { DatePipe } from './pipes/date/date.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { AboutComponent } from './components/about/about.component';
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { TimelineModule } from "primeng/timeline";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrugCardComponent,
    DatePipe,
    FilterPipe,
    AboutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        NgOptimizedImage,
        MatInputModule,
        MatIconModule,
        FormsModule,
        MatButtonModule,
        InputTextModule,
        ButtonModule,
        ChipModule,
        ProgressSpinnerModule,
        TimelineModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
