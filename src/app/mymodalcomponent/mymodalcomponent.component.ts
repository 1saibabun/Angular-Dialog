import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mymodalcomponent',
  templateUrl: './mymodalcomponent.component.html',
  styleUrls: ['./mymodalcomponent.component.css']
})
export class MymodalComponent implements OnInit {

  @Input() title;
  @Input() content;

  constructor(public activeModal: NgbActiveModal) { }
  
  public isSmsChecked: boolean;
  public isEmailChecked: boolean;


  ngOnInit() {
    this.isSmsChecked = true;
    this.isEmailChecked = true;
  }

  submit() {

  }
  logOut() {

  }
  // Phone number with country code and flag
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];


  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  // validation
  validate() {

  }
}

