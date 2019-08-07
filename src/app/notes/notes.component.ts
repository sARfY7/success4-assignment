import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
  @Input() elements;

  constructor() {}

  ngOnInit() {}
}
