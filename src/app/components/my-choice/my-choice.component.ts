import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-choice',
  templateUrl: './my-choice.component.html',
  styleUrls: ['./my-choice.component.scss']
})
export class MyChoiceComponent implements OnInit {

  // tempVal = 100;

  choicesList = [];

  choicesForm = this.fb.group({
    name: ['', Validators.required],
    votes: [0]
  });


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
