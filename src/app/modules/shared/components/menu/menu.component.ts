import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Router, ActivatedRoute } from '@angular/router';

interface FoodNode {
  name: string;
  icon?: string;
  path?: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Activos',
    icon: 'computer',
    children: [{name: 'Nuevo', icon: 'add', path: '/new-property'}, {name: 'Listado', icon: 'list', path: ''}],
  },
  {
    name: 'Reportes',
    icon: 'bar_chart',
    children: [
      {
        name: 'Notas de entregas',
        children: [{name: 'Nuevo'}, {name: 'Listado'}],
      },
      {
        name: 'Toma de inventario',
        children: [{name: 'Nuevo'}, {name: 'Listado'}],
      },
    ],
  },
  {
    name: 'Configuración',
    icon: 'settings'
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: any;
  name: any;
  icon:any;
  path: any;
  level: any;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      icon: node.icon,
      path: node.path,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router: Router, private route: ActivatedRoute) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  goTo(data:any) {
    this.router.navigate([data.path]);
  }
}
