import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";
import { apiKey } from "../../services/api_key";
import type { CoinProps } from "../Home";
import { currencyFormatter } from "../../utils/formatters";

import Styles from "./detail.module.css";
import ImageWithFallback from "../../components/ImageWithFallback";

interface ResponceData {
  data: CoinProps;
}

interface ErrorData {
  error: string;
}

type DataProps = ResponceData | ErrorData;

export default function Detail() {
  const { cripto } = useParams();
  const navigate = useNavigate();
  const [coin, setcoin] = useState<CoinProps>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCoin();
  }, [cripto]);

  async function getCoin() {
    try {
      const response = await fetch(
        `https://rest.coincap.io/v3/assets/${cripto}?apiKey=${apiKey}`,
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data: DataProps = await response.json();

      if ("data" in data) {
        const resultData = {
          ...data.data,
          formatedPrice: currencyFormatter({
            value: data.data.priceUsd,
            locale: "en-US",
            currency: "USD",
          }),
          formatedMarket: currencyFormatter({
            value: data.data.marketCapUsd,
            locale: "en-US",
            currency: "USD",
            compact: true,
          }),
          formatedVolume: currencyFormatter({
            value: data.data.volumeUsd24Hr,
            locale: "en-US",
            currency: "USD",
            compact: true,
          }),
        };

        setcoin(resultData);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  }

  return (
    <section className={Styles.wrapper}>
      <div className={Styles.container}>
        {loading ? (
          <h3>Carregando...</h3>
        ) : (
          <>
            <h1>
              {coin?.name} | {coin?.symbol}
            </h1>

            <div className={Styles.content}>
              <div className={Styles.imageContainer}>
                <ImageWithFallback
                  src={`https://assets.coincap.io/assets/icons/${coin?.symbol.toLowerCase()}@2x.png`}
                  alt="coin image"
                />
              </div>

              <div className={Styles.coinInfo}>
                <h2>{coin?.symbol}</h2>
                <span>
                  <strong>Preço: </strong>
                  {coin?.formatedPrice}
                </span>
                <span>
                  <strong>Mercado: </strong>
                  {coin?.formatedMarket}
                </span>
                <span>
                  <strong>Volume: </strong>
                  {coin?.formatedVolume}
                </span>
                <span>
                  <strong>Mudança 24h: </strong>
                  <span
                    className={
                      Number(coin?.changePercent24Hr) < 0 ? "loss" : "profit"
                    }
                  >
                    {Number(coin?.changePercent24Hr).toFixed(3)}
                  </span>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
