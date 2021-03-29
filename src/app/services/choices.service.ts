import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChoicesService {

  private choicesCollection: AngularFirestoreCollection<any[]>;
  public choices: Observable<any[]>;

  constructor(
    private fireStore: AngularFirestore
  ) {
    this.choicesCollection = fireStore.collection<[]>('choices', ref => ref.orderBy('votes', 'desc'));
    this.choices = this.choicesCollection.valueChanges({idField: 'id'});
   }

  addChoice(choice: any) {
    this.choicesCollection.add(choice);
  }

  addVote(choice: any) {
    let choiceDoc = this.fireStore.doc<any>(`choices/${choice.id}`);
    choiceDoc.update({votes: choice.votes + 1});
  }

}
