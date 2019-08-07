import { Injectable, EventEmitter, Output } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NoteService {
  private currentIndex = 1;

  notes = [
    // { heading: "Note #1", body: "This is note 1." },
    // { heading: "Note #2", body: "This is note 2." },
    // { heading: "Note #3", body: "This is note 3." },
    // { heading: "Note #4", body: "This is note 4." },
    // {
    //   heading: "Note #5",
    //   body:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed ex consequatur rerum, error fugit quae possimus explicabo laudantium ipsa."
    // },
    // { heading: "Note #6", body: "This is note 6." },
    // { heading: "Note #7", body: "This is note 7." },
    // { heading: "Note #8", body: "This is note 8." },
    // {
    //   heading: "Note #9",
    //   body:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed ex consequatur rerum, error fugit quae possimus explicabo laudantium ipsa."
    // }
    {
      id: 1,
      heading: "Hello World",
      body: "This is the hello world of note making web app!"
    }
  ];

  modal: { visible: boolean } = { visible: false };

  @Output() noteDetailEvent = new EventEmitter();

  constructor() {}

  addNote(noteHeading: string, noteBody: string) {
    this.notes.unshift({
      id: ++this.currentIndex,
      heading: noteHeading,
      body: noteBody
    });
  }

  editNote(id: number, updatedHeading: string, updatedBody: string) {
    const currentNoteIndex = this.notes.findIndex(note => note.id === id);
    this.notes[currentNoteIndex].heading = updatedHeading;
    this.notes[currentNoteIndex].body = updatedBody;
  }
}
