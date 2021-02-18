import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MainServie {

    constructor() {
    }

    getWatermarkColor(bright: boolean = false) {
        if (bright) {
            return getComputedStyle(document.documentElement).getPropertyValue('--watermark-base-bright');

        } else {
            return getComputedStyle(document.documentElement).getPropertyValue('--watermark-base');
        }
    }

}
