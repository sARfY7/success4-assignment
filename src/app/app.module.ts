import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddNoteComponent } from "./add-note/add-note.component";
import { NotesComponent } from "./notes/notes.component";
import { NoteComponent } from "./notes/note/note.component";
import { NoteDetailComponent } from "./notes/note/note-detail/note-detail.component";
import { NoteService } from "./services/note.service";

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    NotesComponent,
    NoteComponent,
    NoteDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule {}
