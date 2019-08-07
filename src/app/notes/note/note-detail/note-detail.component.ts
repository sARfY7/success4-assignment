import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NoteService } from "src/app/services/note.service";

@Component({
  selector: "app-note-detail",
  templateUrl: "./note-detail.component.html",
  styleUrls: ["./note-detail.component.scss"]
})
export class NoteDetailComponent implements OnInit {
  noteProperties: { id: number; heading: string; body: string } = {
    id: null,
    heading: "",
    body: ""
  };
  modal: { visible: boolean };

  @ViewChild("noteHeading", { static: false }) noteHeadingRef: ElementRef;
  @ViewChild("noteBody", { static: false }) noteBodyRef: ElementRef;

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.modal = this.noteService.modal;
    this.noteService.noteDetailEvent.subscribe(noteDetail => {
      this.noteProperties = noteDetail;
    });
  }

  saveNoteDetails() {
    this.noteService.modal.visible = false;
    this.noteService.editNote(
      this.noteProperties.id,
      this.noteHeadingRef.nativeElement.innerText,
      this.noteBodyRef.nativeElement.innerText
    );
  }
}
