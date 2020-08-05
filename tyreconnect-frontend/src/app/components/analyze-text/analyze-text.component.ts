import { Component, OnInit, NgZone } from '@angular/core';
import { CharacterPositionService } from '../../shared/character-position.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyze-text',
  templateUrl: './analyze-text.component.html',
  styleUrls: ['./analyze-text.component.css']
})

export class TextAnalysisComponent implements OnInit {
  textAnalysisForm: FormGroup;
  
  CharacterPositionList: any = [];

  ngOnInit() {
    this.addTextAnalysis()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public characterPositionService: CharacterPositionService
  ){ }

  addTextAnalysis() {
    this.textAnalysisForm = this.fb.group({
      text:[''],
      subtext:['']
    })
  }

  submitForm() {    
    var ret = this.characterPositionService.CreateCharacterPosition(this.textAnalysisForm.value).subscribe(res => { 
      var charPositionsDiv = document.getElementById("charPositions");
      charPositionsDiv.hidden = false;
      console.log('Text and Subtext sent for analysis!')
      console.log(res);
      this.CharacterPositionList = res;
    });
  }

}
