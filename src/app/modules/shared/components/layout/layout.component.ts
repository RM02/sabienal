import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  currentRoute: string = "";

  constructor(private router: Router) {
    router.events.subscribe((val:any) => {
      let route = val.url
      switch (route) {
        case "/new-property":
          this.currentRoute = 'Nuevo Registro'
          break
        default:
          this.currentRoute = 'Listado de Activos'
          break
      }
    })
  }

  ngOnInit(): void {
  }

}
