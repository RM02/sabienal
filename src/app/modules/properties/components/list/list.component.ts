import { Component, OnInit } from '@angular/core';
import { PropertiesService } from 'src/app/services/properties/properties.service';

export interface PeriodicElement {
  name: string;
  spec: string;
  _id: number;
  model: string;
  marca: string;
  serie: string;
  user: string;
}
const tableConfig = [
  {
    label: 'Activo',
    key: 'name'
  },
  {
    label: 'Modelo',
    key: 'model'
  },
  {
    label: 'Marca',
    key: 'brand'
  },
  {
    label: 'Serial',
    key: 'serie'
  },
  {
    label: 'Especificaciones',
    key: 'spec'
  },
  {
    label: 'Ubicación',
    key: 'location'
  },
  {
    label: 'Usuario',
    key: 'user'
  }
]
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[];
  tableConfig: any = tableConfig;
  displayedColumnsExpand: string[];
  dataSource: any;
  total: number = 0;
  perPage: number = 5;
  params: any = {
    perPage: this.perPage,
    page: 1
  };

  constructor (public propertiesApi: PropertiesService) {
    this.displayedColumns = tableConfig.map((element) => element.key)

    this.displayedColumnsExpand = [...this.displayedColumns, 'expand']
    this.get(this.params)

  }

  ngOnInit() {}

  get (params:any) {
    this.propertiesApi.getList(params).subscribe((res:any) => {
      this.dataSource = res.result
      this.total = res.total
    })
  }
  nextPage (event:any) {
    this.params.page = event.pageIndex + 1
    this.get(this.params)
  }
  delete(data:any) {
    console.log(data)
  }

}
