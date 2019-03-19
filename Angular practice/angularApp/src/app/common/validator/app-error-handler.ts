import { ErrorHandler } from '@angular/core';

export class AppErrorHandle implements ErrorHandler {
    handleError(error: any): void {
        alert('An unexpected error occured');
        console.log(error);
    }

}
