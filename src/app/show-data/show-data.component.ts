import { Component, OnInit } from '@angular/core';
import { DataStrService, Values } from '../data-str.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  valuesList: Values[] = [];

  constructor(private dataStrService: DataStrService) { }

  ngOnInit(): void {
    this.refreshValues(); // Initial load of values
  }

  deleteValue(id: number): void {
    this.dataStrService.deleteValue(id);
    this.refreshValues(); // Refresh the values list after deletion
  }

  updateValue(id: number, newTask: string): void {
    this.dataStrService.updateValue(id, newTask);
    this.refreshValues(); // Refresh the values list after update
  }


  private refreshValues(): void {
    this.valuesList = this.dataStrService.getValues(); // Update valuesList from the service
  }
}
