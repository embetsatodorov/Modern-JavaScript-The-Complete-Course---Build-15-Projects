export class Insurance {
    base = 2000;

    constructor(make, year, packageType) {
        this.make = make;
        this.year = year;
        this.packageType = packageType;
    }

    calculate() {
        const makeMap = {
            european: () => this.base * 1.05,
            asian: () => this.base * 1.15,
            american: () => this.base * 1.35
        }

        const yearDiff = this.calculateYearDifference();
        // Each year the cost of the insurance is going to be 3% cheaper
        const tempPrice = makeMap[this.make]() - ((yearDiff * 3) * makeMap[this.make]()) / 100;

        const packagePrice = this.calculatePackagePrice(this.packageType, tempPrice);

        const total = tempPrice + packagePrice;

        this.total = total;

        return total;
    }

    calculateYearDifference() {
        return new Date().getFullYear() - this.year;
    }

    calculatePackagePrice(packageType, currentPrice) {
        const packageMap = {
            basic: () => (currentPrice * 30) / 100,
            complete: () => (currentPrice * 50) / 100,
        }

        return packageMap[packageType]();
    }
}