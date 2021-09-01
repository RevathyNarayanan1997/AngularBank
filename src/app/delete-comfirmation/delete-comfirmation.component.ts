import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-comfirmation',
  templateUrl: './delete-comfirmation.component.html',
  styleUrls: ['./delete-comfirmation.component.css']
})
export class DeleteComfirmationComponent implements OnInit {

  @Input() item:string | undefined

 @Output() onDelete = new EventEmitter

 @Output() onCancel = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.onDelete.emit(this.item)
    alert("deleting")
  }

  cancel(){
    this.onCancel.emit(this.item)
    alert("cancellng")
  }

}
