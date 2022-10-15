import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaL } from 'src/app/model/experiencia-l';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new ExperienciaL(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(data =>{alert("Experiencia añadida");
  this.router.navigate(['']);
},err =>{
  alert(['Fallo']);
  this.router.navigate(['']);
}
)
  }
}
