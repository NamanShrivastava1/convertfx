# ConvertFX

A simple and lightweight NPM package for currency conversion using real-time exchange rates.

## Features

- Real-time currency conversion
- Supports multiple currencies
- Easy to use API
- Uses FreeCurrencyAPI for up-to-date exchange rates

## Installation

Install the package using npm:

```bash
npm install convertfx
```

## Usage

Here's a simple example of how to use ConvertFX:

```javascript
import { convertCurrency } from "convertfx";

// Convert 500 INR to USD
convertCurrency("INR", "USD", 500)
    .then((data) => {
        console.log(data); // Outputs the converted amount in USD
    })
    .catch((error) => {
        console.log(error);
    });
```

### Parameters

- `fromCurrency` (string): The source currency code (e.g., "INR", "USD", "EUR")
- `toCurrency` (string): The target currency code (e.g., "USD", "EUR", "GBP")
- `units` (number): The amount to convert

### Return Value

The function returns a Promise that resolves to the converted amount in the target currency.

## Supported Currencies

The package supports all major currencies available through FreeCurrencyAPI, including:
- INR (Indian Rupee)
- USD (US Dollar)
- EUR (Euro)
- GBP (British Pound)
- JPY (Japanese Yen)
- AUD (Australian Dollar)
- CAD (Canadian Dollar)
- And many more...

## Error Handling

The package uses Promise-based error handling. Always use try-catch or .catch() to handle potential errors:

```javascript
try {
    const result = await convertCurrency("INR", "USD", 500);
    console.log(result);
} catch (error) {
    console.error("Conversion failed:", error);
}
```

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

## Author

Naman Shrivastava

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/NamanShrivastava1/convertfx/issues).

## Repository

[GitHub Repository](https://github.com/NamanShrivastava1/convertfx)
