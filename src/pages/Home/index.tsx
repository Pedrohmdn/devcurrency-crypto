import { Link, useNavigate } from "react-router";
import Styles from "./home.module.css";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { apiKey } from "../../services/api_key";
import { currencyFormatter } from "../../utils/formatters";
import ImageWithFallback from "../../components/ImageWithFallback";

export interface CoinProps {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  vwap24Hr: string;
  changePercent24Hr: string;
  rank: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  explorer: string;
  formatedVolume?: string;
  formatedPrice?: string;
  formatedMarket?: string;
}
interface DataProps {
  data: CoinProps[];
}

export default function Home() {
  const navigate = useNavigate();

  const [coins, setCoins] = useState<CoinProps[]>([]);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    getData();
  }, [offset]);

  async function getData() {
    try {
      const response = await fetch(
        `https://rest.coincap.io/v3/assets?limit=10&offset=${offset}&apiKey=${apiKey}`,
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data: DataProps = await response.json();

      const formatedResult = data.data.map((item) => {
        const formated = {
          ...item,
          formatedPrice: currencyFormatter({
            value: item.priceUsd,
            locale: "en-US",
            currency: "USD",
          }),
          formatedMarket: currencyFormatter({
            value: item.marketCapUsd,
            locale: "en-US",
            currency: "USD",
            notation: "compact",
          }),
          formatedVolume: currencyFormatter({
            value: item.volumeUsd24Hr,
            locale: "en-US",
            currency: "USD",
            notation: "compact",
          }),
        };
        return formated;
      });

      setCoins([...coins, ...formatedResult]);
    } catch (error) {
      console.error("Falha ao buscar dados:", error);
    }
  }

  function getMore(): void {
    setOffset(offset + 10);
  }

  function handleSubmit(formData: FormData) {
    const coin = formData.get("coin") as string;

    navigate(`/detail/${coin.toLocaleLowerCase()}`);
  }
  return (
    <section className={Styles.wrapper}>
      <div className={Styles.container}>
        <form className={Styles.formContainer} action={handleSubmit}>
          <input
            type="text"
            placeholder="Digite o nome de uma moeda"
            required
            name="coin"
          />
          <button type="submit">
            <BsSearch size={30} color="#fff" />
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th scope="col">Moeda</th>
              <th scope="col">Valor mercado</th>
              <th scope="col">preço</th>
              <th scope="col">Volume</th>
              <th scope="col">Mudança 24h</th>
            </tr>
          </thead>
          <tbody id="tbody">
            {coins.length > 0 &&
              coins.map((coin) => (
                <tr className={Styles.tr} key={coin.id}>
                  <td className={Styles.tdLabel} data-label="Moeda">
                    <div className={Styles.coinName}>
                      <div className={Styles.logoContainer}>
                        <ImageWithFallback
                          src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                          alt="coin image"
                        />
                      </div>
                      <Link to={`/detail/${coin.id}`}>
                        <span>
                          {coin.name} | {coin.symbol}
                        </span>
                      </Link>
                    </div>
                  </td>

                  <td className={Styles.tdLabel} data-label="Valor mercado">
                    <span>{coin.formatedMarket}</span>
                  </td>
                  <td className={Styles.tdLabel} data-label="Preço">
                    <span>{coin.formatedPrice}</span>
                  </td>
                  <td className={Styles.tdLabel} data-label="Volume">
                    <span>{coin.formatedVolume}</span>
                  </td>
                  <td
                    className={
                      Number(coin.changePercent24Hr) < 0 ? "loss" : "profit"
                    }
                    data-label="Mudança 24h"
                  >
                    <span>{Number(coin.changePercent24Hr).toFixed(3)}</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <button className={Styles.showMoreButton} onClick={getMore}>
          Mostrar mais
        </button>
      </div>
    </section>
  );
}
