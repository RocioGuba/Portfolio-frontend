import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { HOMEComponent } from './components/home/home.component';
import { EditskillComponent } from './components/hys/editskill/editskill.component';
import { NewskillComponent } from './components/hys/newskill/newskill.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HOMEComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id' , component: EditeducacionComponent},
  { path: 'newskill', component: NewskillComponent},
  { path: 'editskill/:id', component: EditskillComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
