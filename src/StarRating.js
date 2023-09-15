import {createArray} from "./Tools.js"
import { Star } from "./Star.js";

export function StarRating({ totalStars = 5,
    selectedStars = 0,
    onRate = f => f
  }) {
    return (<>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
    </>);
  }
  