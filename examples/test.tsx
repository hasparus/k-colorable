// @ts-nocheck

import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";
import { graphql } from "./gql/gql";

const query = graphql(`
  query Forecast($city: String!) {
    forecast(city: $city) {
      temperature
      humidity
      wind {
        speed
      }
    }
  }
`);

export default function Forecast({ city }: { city: string }) {
  const { data } = useQuery(
    ["currentForecast", city],
    () => request("/graphql", query, { city }),
    { suspense: true }
  );

  return (
    <dl>
      <dt>temperature</dt>
      <dd>{data.forecast.temperature}</dd>
      <dt>humidity</dt>
      <dd>{data.forecast.humidity}</dd>
      <dt>wind</dt>
      <dd>{data.forecast.wind.speed}</dd>
    </dl>
  );
}
