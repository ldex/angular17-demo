import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
    templateUrl: './error.component.html',
    standalone: true
})
export class ErrorComponent {

    message: string = "";

    constructor(private route: ActivatedRoute) {
		this.message = this.route.snapshot.queryParams['reason'] || 'Sorry there was a problem.';
    }
}