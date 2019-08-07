import { Component, OnInit } from "@angular/core";
import { NoteService } from "./services/note.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  notes: { heading: string; body: string }[] = [];
  modal: { visible: boolean };

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.notes = this.noteService.notes;
    this.modal = this.noteService.modal;
  }
}
