import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  data: any;
  vehiclst;


  constructor(private apollo: Apollo) { }

  ngOnInit() {
  this.loadcount();
  this.loadall();

    }

    loadcount(){
      this.apollo.query({
        query: gql`query {
          vehicles(count: 1)
          {
            modelCode,
            brandName
          }
        }`
      }).subscribe(({ data, loading }) => {
        this.data = data;
      });
    }


    loadall(){
      this.apollo.query({
        query: gql`query {
          getAllVehicles
          {
            id,
            type,
            modelCode,
            brandName
          }
        }`
      }).subscribe(({ data, loading }) => {
        this.vehiclst = data;
      });
   }

















}


