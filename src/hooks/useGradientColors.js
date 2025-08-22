import { useEffect } from "react";

export const useGradientColors = (cardSelector = ".card-content", tileSelector = ".project-card") => {
  useEffect(() => {
    const cardColors = [
      { topRight: "#39ff14", bottomLeft: "#ff3131" },
      { topRight: "#00ffff", bottomLeft: "#ff00ff" },
      { topRight: "#ffd700", bottomLeft: "#ff4500" },
      { topRight: "#ff69b4", bottomLeft: "#8a2be2" }
    ];

    const cards = document.querySelectorAll(cardSelector);
    cards.forEach((card, index) => {
      const color = cardColors[index % cardColors.length];
      card.style.setProperty("--top-right-color", color.topRight);
      card.style.setProperty("--bottom-left-color", color.bottomLeft);
    });

    const tileColors = [
      { topRight: "#00ffcc", bottomLeft: "#ff007f" },
      { topRight: "#ffdd00", bottomLeft: "#ff4500" },
      { topRight: "#39ff14", bottomLeft: "#ff3131" },
      { topRight: "#8a2be2", bottomLeft: "#ff69b4" },
      { topRight: "#00bfff", bottomLeft: "#ff1493" },
      { topRight: "#ffa500", bottomLeft: "#00ff00" }
    ];

    const tiles = document.querySelectorAll(tileSelector);
    tiles.forEach((tile, index) => {
      const color = tileColors[index % tileColors.length];
      tile.style.setProperty("--top-right-color", color.topRight);
      tile.style.setProperty("--bottom-left-color", color.bottomLeft);
    });
  }, [cardSelector, tileSelector]);
};