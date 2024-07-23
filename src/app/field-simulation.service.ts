import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FieldSimulationService {

  private mockDataUrl = 'mock-data.json'; // Path to the JSON file

  constructor(private http: HttpClient) { }

  fetchData(fieldName: string, fieldValue: string): Observable<any[]> {
    return this.http.get<any[]>(this.mockDataUrl).pipe(
      map(data => {
        console.log('Data fetched:', data); // Log fetched data
        if (data.length === 0) {
          console.warn('No data available in mock-data.json');
        }
        const filteredData = data.filter(item => item[fieldName] === fieldValue);
        console.log('Filtered data:', filteredData); // Log filtered data
        return filteredData;
      }),
      catchError(error => {
        console.error('Error fetching data:', error);
        return of([]);
      }),
      delay(1000) // Simulate network delay
    );
  }
}