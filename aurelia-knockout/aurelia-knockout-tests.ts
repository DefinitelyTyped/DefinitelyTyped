
export class ViewModel {

    constructor(private knockoutBindable: KnockoutBindable) {
    }

    public activate(settings: any): void {
        this.knockoutBindable.applyBindableValues(settings, this);
        this.knockoutBindable.applyBindableValues(settings, this, true);
    }
}
