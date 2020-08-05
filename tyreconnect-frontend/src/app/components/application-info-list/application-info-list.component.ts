import { Component, OnInit } from '@angular/core';
import { CharacterPositionService } from '../../shared/character-position.service';

@Component({
  selector: 'app-application-info-list',
  templateUrl: './application-info-list.component.html',
  styleUrls: ['./application-info-list.component.css']
})
export class ApplicationInfoListComponent implements OnInit {

  InformationSection: any = [];

  ngOnInit() {
    this.loadApplicationInfoList();
  }

  constructor(
    public characterPositionService: CharacterPositionService
  ){ }

   // Application Info list
   loadApplicationInfoList() {
    return this.characterPositionService.GetInformation().subscribe((data: {}) => {      
      console.log(data);      
      this.InformationSection = data;
    })
  }
}
