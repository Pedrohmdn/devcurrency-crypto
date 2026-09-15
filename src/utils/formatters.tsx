interface PriceFormatterProps extends Intl.NumberFormatOptions  {
  value: number | string;
  locale: Intl.LocalesArgument;
}

export function currencyFormatter(currencyInfo: PriceFormatterProps): string {
  const price = Intl.NumberFormat(currencyInfo.locale, {
    style: "currency",
    currency: currencyInfo.currency,
    notation: currencyInfo.notation,
  });

  

  return price.format(Number(currencyInfo.value));
}
