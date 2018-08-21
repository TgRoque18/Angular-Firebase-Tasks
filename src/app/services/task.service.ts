import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '../../../node_modules/angularfire2/firestore';
import { Task } from '../models/task.model';
import { Observable, of } from "rxjs";
import { CollectionReference } from '../../../node_modules/@firebase/firestore-types';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: AngularFirestoreCollection<Task>;

  constructor(
    private db: AngularFirestore
  ) {
    this.setTasks();
   }

  private setTasks(): void {
    this.tasks = this.db.collection<Task>('/tasks', 
      (ref: CollectionReference) => ref.orderBy('done', 'asc').orderBy('title', 'asc'));
  }

  create(task: Task): Promise<void> {
    const uid = this.db.createId();
    // /tasks/dsfdfsdf9f8sdfs/
    return this.tasks.doc<Task>(uid)
      .set({
        uid,
        title: task.title,
        done: false
      });
  }

  update(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uid)
      .update(task);
  }
  
  delete(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uid)
      .delete();
  }

  get(uid: string): Observable<Task>{
    return this.tasks.doc<Task>(uid).valueChanges();
  }
}
