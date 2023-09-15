import { ColorList } from "./ColorList";
import colorData from "./color-data.json"
import { useState } from "react";
export default function ColorApp() {
  const [colors, setColors] = useState(colorData);
  return (
    <ColorList
      colors={colors}
      onRateColor={(id, rating) => {
        const newColors = colors.map(color =>
          color.id === id ? { ...color, rating } : color
        );
        setColors(newColors);
      }}
      onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id); setColors(newColors);
      }}
    />
  );
}