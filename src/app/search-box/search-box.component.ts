import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../search-data.service';
import { LoadingComponent } from '../loading';

@Component({
  moduleId: module.id,
  selector: 'app-search-box',
  templateUrl: 'search-box.component.html',
  styleUrls: ['search-box.component.css'],
  directives: [LoadingComponent],
  providers: [SearchDataService]
})
export class SearchBoxComponent implements OnInit {

  constructor (private searchDataService: SearchDataService) {}

  errorMessage: string;
  results: any;
  meta: any;
  keys: any;
  loadingResults: boolean;

  ngOnInit() {
    this.results = null;
    this.meta = {};
    this.keys = [
      { id: 'marital_status', name: 'Marital Status' },
      { id: 'first_name', name: 'First Name' },
      { id: 'last_name', name: 'Last Name' },
      { id: 'email_address', name: 'Email Address', field: function(v){ return v.email.value; } },
      { id: 'address', name: 'Address', field: function(v){
        return (v.line1 ? v.line1.value + '\n' : '') +
          (v.city ? v.city.value + ' ' : '') +
          (v.country ? v.country.value + ' ' : '') +
          (v.postal_code ? v.postal_code.value : '');
      } },
      { id: 'gender', name: 'Gender' },
      { id: 'staff_status', name: 'Staff Status' },
      { id: 'employment_country', name: 'Employment Country' },
      { id: 'language', name: 'Language' },
      { id: 'phone_number', name: 'Phone Number', field: function(v){ return v.number.value; } },
      { id: 'birth_date', name: 'Birth Date' },
      { id: 'ministry_location_country', name: 'Ministry Location Country' },
      { id: 'key_username', name: 'Key Username' },
      { id: 'funding_source', name: 'Funding Source' },
      { id: 'paygroup', name: 'Pay Group' },
      { id: 'role', name: 'Role' },
      { id: 'date_joined_staff', name: 'Date Joined Staff' },
      { id: 'key_username', name: 'Key Username' },
    ];
  }

  keyHasValue(person:any, key:any){
    return typeof person[key.id] !== 'undefined';
  }

  search(term:string, page:number) {
    if (term) {
      this.loadingResults = true;
      this.results = null;

      var names = term.split(' ');
      var lastName = names[1] ? names[1] : names [0];
      var firstName = names[1] ? names[0] : null;
      this.searchDataService.getPeople(lastName, firstName, page)
        .subscribe(
          data => {
            this.results = data['entities'],
            this.meta = data['meta']
          },
          error =>  this.errorMessage = <any>error);
    }
  }

}
