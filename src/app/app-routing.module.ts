import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactmeComponent } from './contactme/contactme.component';

const routes: Routes = [
  { path: 'about', component: AppComponent },
  { path: 'contact', component: ContactmeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
