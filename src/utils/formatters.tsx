interface PriceFormatterProps {
  value: number | string;
  locale: string;
  currency: string;
  compact?: boolean;
}

export function currencyFormatter(currencyInfo: PriceFormatterProps): string {
  const price = Intl.NumberFormat(currencyInfo.locale, {
    style: "currency",
    currency: currencyInfo.currency,
    notation: currencyInfo.compact ? "compact" : "standard",
  });

  

  return price.format(Number(currencyInfo.value));
}
