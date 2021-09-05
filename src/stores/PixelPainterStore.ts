import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] 
  Color: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  Color: "#FFFFFF"
})

export const setColor = (color:string) => {
  PixelPainterStore.update(
    s => {s.Color = color}
  )
}

export const PaintCell = (x:number,y:number) =>{
PixelPainterStore.update(s => {s.canvas[y][x] = s.Color})

}

export const Clear = () =>{
  PixelPainterStore.update(
    s => {
      s.canvas = createEmptyCanvas()
    }
  )
}

export const Random = () =>{
  const RanColor: string[] = []
  RanColor[0] = '#000000'
  RanColor[1] = '#804000'
  RanColor[2] = '#FE0000'
  RanColor[3] = '#FE6A00'
  RanColor[4] = '#FFD800'
  RanColor[5] = '#00FF01'
  RanColor[6] = '#FFFFFF'
  RanColor[7] = '#01FFFF'
  RanColor[8] = '#0094FE'
  RanColor[9] = '#0026FF'
  RanColor[10] = '#B100FE'
  RanColor[11] = '#FF006E'

  PixelPainterStore.update(
    s => {
      for (let i=0; i<16; i++){
        for (let j=0; j<16; j++){
          s.canvas[i][j] = RanColor[Math.floor(Math.random() * 12)]
        }
      }
    }
  )
}