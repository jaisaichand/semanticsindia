import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  theData = [];
  statesData = {
    "AP": "Andhra Pradesh",
    "AR": "Arunachal Pradesh",
    "AS": "Assam",
    "BR": "Bihar",
    "CT": "Chhattisgarh",
    "GA": "Goa",
    "GJ": "Gujarat",
    "HR": "Haryana",
    "HP": "Himachal Pradesh",
    "JK": "Jammu and Kashmir",
    "JH": "Jharkhand",
    "KA": "Karnataka",
    "KL": "Kerala",
    "MP": "Madhya Pradesh",
    "MH": "Maharashtra",
    "MN": "Manipur",
    "ML": "Meghalaya",
    "MZ": "Mizoram",
    "NL": "Nagaland",
    "OR": "Odisha",
    "PB": "Punjab",
    "RJ": "Rajasthan",
    "SK": "Sikkim",
    "TN": "Tamil Nadu",
    "TG": "Telangana",
    "TR": "Tripura",
    "UT": "Uttarakhand",
    "UP": "Uttar Pradesh",
    "WB": "West Bengal",
    "AN": "Andaman and Nicobar Islands",
    "CH": "Chandigarh",
    "DH": "Dadra and Nagar Haveli",
    "DD": "Daman and Diu",
    "DN": "Dadra and Nagar Haveli and Daman and Diu",
    "DL": "Delhi",
    "LD": "Lakshadweep",
    "PY": "Puducherry",
    "LA": "Ladakh"
  }
  statesList = Object.keys(this.statesData);
  currentSelected = {index:this.statesList[0],districts:[]};

  ngOnInit(): void {
    this.http.get("https://data.covid19india.org/v4/min/data.min.json").subscribe((data:any[])=>{
      console.log(data);
      this.theData = data;
      this.currentSelected.districts = Object.keys(this.theData[this.currentSelected.index].districts);
      
    })
  }

  changeTo(listItem){
    this.currentSelected.index = listItem;
    this.currentSelected.districts = Object.keys(this.theData[this.currentSelected.index].districts);
  }

  data = [];

}
