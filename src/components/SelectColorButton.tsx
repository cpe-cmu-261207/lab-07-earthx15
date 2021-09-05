import {PixelPainterStore, setColor } from "../stores/PixelPainterStore"

type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {
  const state = PixelPainterStore.useState()
  //modify this function to highlight correctly
  const computeRingSize = (Color:string | null) => {
    if(Color === color)
      return "ring-8 ring-green-400"
    else 
      return ""
  }

  return (
    <div className={`${computeRingSize(state.Color)} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }} onClick ={() =>{
        setColor(color)
      }
      }
    >
    </div>
  )
}

export default SelectColorButton