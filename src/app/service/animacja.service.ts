import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AnimacjaService {

    constructor() {
    }

    topAnimation() {
        console.warn('top');
    }

    downAnimation() {
        console.warn('down');
    }

    setAnimation(typ: string) {
        switch (typ) {
            case 'top':
                this.topAnimation();
                break;
            case 'down':
                this.downAnimation();
                break;
        }
    }
}
