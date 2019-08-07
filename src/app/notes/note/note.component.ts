import { Component, OnInit, Input } from "@angular/core";
import { NoteService } from "src/app/services/note.service";

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.scss"]
})
export class NoteComponent implements OnInit {
  @Input() noteProperties: { id: number; heading: string; body: string };

  constructor(private noteService: NoteService) {}

  ngOnInit() {}

  showNoteDetails() {
    this.noteService.modal.visible = true;
    this.noteService.noteDetailEvent.emit(this.noteProperties);
  }
}
