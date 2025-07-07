import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_b0zVBzrJGqphdpjStMrvJ8iXCIOV8tr0EozzZ1qv');

export async function convertCurrency(fromCurrency, toCurrency, units) {

    const response = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency,
    });

    const multiplier = response.data[toCurrency];
    return multiplier * units;
}