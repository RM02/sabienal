import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from 'src/app/services/properties/properties.service';

export class Model {
  static create(obj:any) {
    return new Model(
      obj['name'],
      obj['brand'],
      obj['model'],
      obj['serie'],
      obj['user'],
      obj['location'],
      obj['spec']
    )
  }
  constructor (
    public name?:string,
    public spec?: string,
    public brand?: string,
    public model?: string,
    public serie?: string,
    public user?: string,
    public location?: string,
  ) {}
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public data: any;
  public status: boolean = false;

  constructor (public propertiesApi: PropertiesService, private route: Router) {
    this.data = Model.create({})
  }

  ngOnInit(): void {}

  save () {
    console.log(this.data)
    this.propertiesApi.create(this.data).subscribe(() => {
      this.route.navigate([''])
    })
  }

}
