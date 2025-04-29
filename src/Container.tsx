// import { App2 } from "./App2";
import "./App2.css";
import { Square } from "./Square";

export const Container = () => {
    const colors = ["red", "yellow", "#CCAA00", "green", "orange"];
    return <>
        {colors.map(item => 
        <Square textColor={invertColor(item)} color={item}>
          <p>Hello World</p>
        </Square>)}
        </>
};


const invertColor = (color: string, bw = false) => {
    // Crea un elemento temporaneo per usare getComputedStyle
    const temp = document.createElement("div");
    temp.style.color = color;
    document.body.appendChild(temp);
  
    // Ottieni il colore computato in formato RGB
    const computedColor = getComputedStyle(temp).color;
    document.body.removeChild(temp);
  
    // Estrai i valori R, G, B da rgb(...)
    const rgb = computedColor.match(/\d+/g)!.map(Number);
    const [r, g, b] = rgb;
  
    if (bw) {
      // Contrasto leggibile bianco/nero
      return (r * 0.299 + g * 0.587 + b * 0.114) > 186
        ? '#000000' : '#FFFFFF';
    }
  
    // Inversione
    const rAsString = (255 - r).toString(16).padStart(2, '0');
    const gAsString = (255 - g).toString(16).padStart(2, '0');
    const bAsString = (255 - b).toString(16).padStart(2, '0');
  
    return `#${rAsString}${gAsString}${bAsString}`;
  }

// <App2 />
// <App2 ></App2>