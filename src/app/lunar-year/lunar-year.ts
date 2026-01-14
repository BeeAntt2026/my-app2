import { Component, OnInit } from '@angular/core';
import { LunarYear } from './lunar-year.spec';

@Component({
    selector: 'app-lunar-year',
    templateUrl: './lunar-year.component.html',
    styleUrls: ['./lunar-year.component.css']
})
export class LunarYearComponent implements OnInit {
    days: number[] = [];
    months: number[] = [];
    years: number[] = [];
    
    selectedDay: number = 1;
    selectedMonth: number = 1;
    selectedYear: number = 2024;
    
    lunarResult: any = null;

    ngOnInit() {
        // Initialize days (1-31)
        for (let i = 1; i <= 31; i++) {
            this.days.push(i);
        }
        
        // Initialize months (1-12)
        for (let i = 1; i <= 12; i++) {
            this.months.push(i);
        }
        
        // Initialize years (1900-2100)
        for (let i = 1900; i <= 2100; i++) {
            this.years.push(i);
        }
        
        // Set default to today
        const today = new Date();
        this.selectedDay = today.getDate();
        this.selectedMonth = today.getMonth() + 1;
        this.selectedYear = today.getFullYear();
    }

    convert() {
        const lunar = new LunarYear(this.selectedDay, this.selectedMonth, this.selectedYear);
        this.lunarResult = lunar.findLunarYearDetail();
    }
}