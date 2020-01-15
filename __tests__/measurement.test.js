import { Measurement, Unit } from "../src/measurement";

describe("Measurement", () => {
    describe('#equals', () => {
        const centimeter_100 = new Measurement(100, Unit.CM);
        const meter_1 = new Measurement(1, Unit.M);

        it('should return true for centimeter 100 and meter 1', () => {
            const isEqual = centimeter_100.equals(meter_1);
            expect(meter_1.unit).toBe(Unit.M);
            expect(isEqual).toBe(true);
        });

        it('should return true for meter 1 and centimeter 100', () => {
            const isEqual = meter_1.equals(centimeter_100);
            expect(isEqual).toBe(true);
        });

        it('should return true for meter 1000 and kilometer 1', () => {
            const kilometer_1 = new Measurement(1, Unit.KM);
            const meter_1000 = new Measurement(1000, Unit.M);

            const isEqual = meter_1000.equals(kilometer_1);

            expect(isEqual).toBe(true);
        });

        it('should return true for centimeter 100000 and kilometer 1', () => {
            const kilometer_1 = new Measurement(1, Unit.KM);
            const centimeter_1000 = new Measurement(100000, Unit.CM);

            const isEqual = centimeter_1000.equals(kilometer_1);
            expect(isEqual).toBe(true);
        });

        it('should return true for grams 1000 and kilogram 1', () => {
            const kilogram_1 = new Measurement(1, Unit.KG);
            const gram_1000 = new Measurement(1000, Unit.G);

            const isEqual = gram_1000.equals(kilogram_1);
            expect(isEqual).toBe(true);
        });

        it('should throw error for grams 1 and centimeter 1', () => {
            const gram_1 = new Measurement(1, Unit.G);
            const centimeter_1 = new Measurement(1, Unit.CM);

            expect(() => { gram_1.equals(centimeter_1) }).toThrow('Incompatible unit type');
        });

        it('should return true for Fahrenheit 32 and Kelvin 273.15', () => {
            const fahrenheit_32 = new Measurement(32, Unit.Fahrenheit);
            const kelvin_273_15 = new Measurement(273.15, Unit.Kelvin);

            const isEqual = fahrenheit_32.equals(kelvin_273_15);
            expect(isEqual).toBe(true);
        });
    });

    describe('#add', () => {
        it('should return 2m after adding 100cm with 1m', () => {
            const centimeter_100 = new Measurement(100, Unit.CM);
            const meter_1 = new Measurement(1, Unit.M);

            const result = centimeter_100.add(meter_1);
            const centimeter_200 = new Measurement(200, Unit.CM);

            expect(result).toStrictEqual(centimeter_200);

        });

        it('should throw error on adding 100cm and 100gm', () => {
            const gram_100 = new Measurement(100, Unit.G);
            const centimeter_100 = new Measurement(100, Unit.CM);
            expect(() => { centimeter_100.add(gram_100) }).toThrow('Incompatible unit type');
        });




    });
});
