import { Component, Input, OnInit } from '@angular/core';
import {Parent} from '../reddit-interface';
import {RedditService} from '../reddit.service'

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  post: Parent;

  constructor(private redService: RedditService) { }

  ngOnInit(): void {

    this.redService.getPost().subscribe(
      (data: Parent) =>
        this.post=data
    )

  }

}
