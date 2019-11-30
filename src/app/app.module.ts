import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule ,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { UserlayoutComponent } from './userlayout/userlayout.component';
import { LoginComponent } from './userlayout/login/login.component';
import { ProcessSelectionComponent } from './userlayout/process-selection/process-selection.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
    { path: ' ', component:  LoginComponent},
    { path: 'process-selection', component:  ProcessSelectionComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UserlayoutComponent,
    LoginComponent,
    ProcessSelectionComponent,
   
 
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
