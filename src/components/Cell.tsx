import { PixelPainterStore,PaintCell } from "../stores/PixelPainterStore"

type CellProps = {
  x: number;
  y: number;
}

const Cell = ({ x, y }: CellProps) => {

  const state = PixelPainterStore.useState()

  return (
    <td className="w-6 h-6 cursor-pointer" style={{backgroundColor: state.canvas[y][x]}} 
    onClick = {()=>PaintCell(x,y)}
    >
    </td>
  )
}

export default Cell