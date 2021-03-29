import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChoicesService } from 'src/app/services/choices.service';

@Component({
  selector: 'app-my-choice',
  templateUrl: './my-choice.component.html',
  styleUrls: ['./my-choice.component.scss']
})
export class MyChoiceComponent implements OnInit {

  // tempVal = 100;

  choicesList = <any>[];

  choicesForm = this.fb.group({
    name: ['', Validators.required],
    votes: [0]
  });


  constructor(
    private choicesService: ChoicesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.choicesService.choices.subscribe(
      data => {
        this.choicesList = data;
        console.log(data);
      }
    );
  }


  createChoice() {
    // this funciton will send a request to the db to creata a choice
    this.choicesService.addChoice(this.choicesForm.value);
    this.choicesForm.reset();
  }

  upvote(choice: any) {
    this.choicesService.addVote(choice);
  }


}
