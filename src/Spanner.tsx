
import { memo } from "react";

export type SpannerProps = {
  value: number;
  f: () => void;
}

export const Spanner = memo((props: SpannerProps) => {
  console.log("sto rirenderizzando lo Spanner");
  return (<div>Spanner {props.value}
    <button onClick={props.f}>Premi</button>
  </div>);
});

// export const SpannerMemo = memo(Spanner);
