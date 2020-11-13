import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/core/services/tag.service';


export interface PeriodicElement {
  id: number;
  tag_name:string;
  tag_type:string;
  store_count: number;
  status:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, tag_name: 'Hydrogen', tag_type: 'General', store_count: 100, status:'', action:''},
  {id: 2, tag_name: 'Hydrogen', tag_type: 'General', store_count: 100, status:'', action:''},
  {id: 3, tag_name: 'Hydrogen', tag_type: 'General', store_count: 100, status:'', action:''},
  {id: 4, tag_name: 'Hydrogen', tag_type: 'General', store_count: 100, status:'', action:''},
  {id: 5, tag_name: 'Hydrogen', tag_type: 'General', store_count: 100, status:'', action:''},
  {id: 6, tag_name: 'Hydrogen', tag_type: 'General', store_count: 100, status:'', action:''},
  {id: 7, tag_name: 'Hydrogen', tag_type: 'General', store_count: 100, status:'', action:''},
  {id: 8, tag_name: 'Hydrogen', tag_type: 'General', store_count: 100, status:'', action:''},
  {id: 9, tag_name: 'Hydrogen', tag_type: 'General', store_count: 100, status:'', action:''},
  {id: 10, tag_name: 'Hydrogen', tag_type: 'General', store_count: 100, status:'', action:''},
  
];

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})




export class TagListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'tag_name', 'tag_type', 'store_count','status','action'];
  dataSource = ELEMENT_DATA;
  start: number = 0;
  limit: number = 6;
  end: number = this.limit + this.start;
  lastPosition:number = this.dataSource[this.dataSource.length-1].id

  constructor(private tagService: TagService) {

   }

  ngOnInit(): void {
    this.dataSource = this.getTableData(this.start, this.end);
    this.onButtonClick();
    this.closeDropDown();
    this.getTableDataSource();
  }

  onButtonClick() {
      console.log(this.lastPosition);
      console.log(this.end);

        
        let data = this.getTableData(this.end-this.start, this.end);
        this.dataSource = this.dataSource.concat(data);
        this.updateIndex();
    
  }
  
  getTableData(start, end) {
    return ELEMENT_DATA.filter((value, index) => index >= start && index < end);
  }


  getTableDataSource(){
    
    // this.tagService.getCountryCodes().subscribe(response =>{
    //   this.countries = response['content'] as ICountry;
    //   //console.log(this.countries);
    // })

    this.tagService.getTags().subscribe( response =>{
      console.log(response);
    } )

  }

  updateIndex() {
    this.start = this.end;
    this.end = this.limit + this.start;
  }
  

  openDropDown() {
    //alert('clicked');
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
 closeDropDown() {
   // if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    //}/
  }


}
