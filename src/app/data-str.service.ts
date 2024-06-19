import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStrService {
  private valuesList: Values[] = []; // Array to store Values objects
  private static nextId = 1;

  constructor() { }

  createNewValue(task: string): Values {
    const newValue = new Values(DataStrService.nextId++, task);
    this.valuesList.push(newValue); // Add new Values object to the array
    return newValue;
  }

  getValues(): Values[] {
    return this.valuesList; // Return the entire array of Values objects
  }

  getValueById(id: number): Values | undefined {
    return this.valuesList.find(value => value.id === id); // Find and return Values object by ID
  }

  updateValue(id: number, task: string): void {
    const valueToUpdate = this.valuesList.find(value => value.id === id);
    if (valueToUpdate) {
      valueToUpdate.task = task; // Update task property of the specified Values object
    }
  }

  deleteValue(id: number): void {
    this.valuesList = this.valuesList.filter(value => value.id !== id); // Remove Values object from array by ID
    // No need to log this.valuesList here
  }
}

export class Values {
  id: number;
  task: string;

  constructor(id: number, task: string) {
    this.id = id;
    this.task = task;
  }
}
