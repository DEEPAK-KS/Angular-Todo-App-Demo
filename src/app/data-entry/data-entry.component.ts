import { Component, OnInit } from '@angular/core';
import { DataStrService } from '../data-str.service';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  inputValue: string = ''; // Property to store input value

  constructor(private dataStrService: DataStrService) { }

  ngOnInit(): void {
    // Optional initialization logic
  }

  send_data() {
    if (this.inputValue.trim() !== '') {
      const newValue = this.dataStrService.createNewValue(this.inputValue.trim());
      console.log('Created new task with ID:', newValue.id, 'and task:', newValue.task);
      this.inputValue = ''; // Clear input field after submission if needed
    }
  }

  updateTask(id: number) {
    const newTask = prompt('Enter new task:'); // Example: Use prompt or input field to get new task
    if (newTask !== null && newTask.trim() !== '') {
      this.dataStrService.updateValue(id, newTask.trim());
      console.log('Updated task with ID:', id, 'to:', newTask.trim());
    }
  }
}
