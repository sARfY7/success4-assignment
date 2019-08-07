import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Renderer2
} from "@angular/core";
import { NoteService } from "../services/note.service";

@Component({
  selector: "app-add-note",
  templateUrl: "./add-note.component.html",
  styleUrls: ["./add-note.component.scss"]
})
export class AddNoteComponent implements OnInit {
  isCollapsed: boolean = true;
  @ViewChild("noteHeading", { static: false }) noteHeadingRef: ElementRef;
  @ViewChild("noteBody", { static: false }) noteBodyRef: ElementRef;

  constructor(private renderer: Renderer2, private noteService: NoteService) {}

  ngOnInit() {}

  uncollapse() {
    this.isCollapsed = false;
  }

  collapse() {
    this.isCollapsed = true;
  }

  addNote() {
    // console.log(this.noteHeadingRef.nativeElement.innerText);
    // console.log(this.noteBodyRef.nativeElement.innerText);
    const noteHeadingValue = this.noteHeadingRef.nativeElement.innerText;
    const noteBodyValue = this.noteBodyRef.nativeElement.innerText;
    if (!(noteHeadingValue === "") && !(noteBodyValue === "")) {
      this.noteService.addNote(noteHeadingValue, noteBodyValue);
      this.renderer.setProperty(
        this.noteHeadingRef.nativeElement,
        "innerText",
        null
      );
      this.renderer.setProperty(
        this.noteBodyRef.nativeElement,
        "innerText",
        null
      );
    }
  }
}
