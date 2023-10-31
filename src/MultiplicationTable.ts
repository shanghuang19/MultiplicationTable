export type Multiplication = [number, number, number]

export class MultiplicationTable {
  public renderMultiplicationTable(start: number, end: number): string|null{
    if (!this.isValid(start,end)){
      return null
    }
    const table: Multiplication[][] = this.generateMultiplicationTable(start, end)
    const tableString:string = this.render(table)
    return tableString

  }
  private isValid(start:number, end:number): boolean{
    return Number.isInteger(start) && Number.isInteger(end) && this.isValidNumber(start) && this.isValidNumber(end) && this.isEndGreaterEqualThanStart(start, end)
  }
  private isValidNumber(num: number): boolean{
    return num>=1 && num<=1000
  }
  private isEndGreaterEqualThanStart(start:number, end:number): boolean{
    return (start<=end)
  }

  private render(table:Multiplication[][]): string{
    return table.map(
      row => row.map(eq => `${eq[0]}*${eq[1]}=${eq[2]}`).join('  ')
    ).join('\n')
  }

  private generateMultiplicationTable(start:number, end:number): Multiplication[][]{
    const multiplications2: Multiplication[][]=[]
    for (let j=start;j<=end; j++)
    {
      multiplications2.push(this.generateMultiplicationRow(start, j))
    }
    return multiplications2
  }

  private generateMultiplicationRow(start:number, rowMultiplier: number): Multiplication[]{
    const multiplications: Multiplication[] = []
    for (let i=start;i<=rowMultiplier;i++)
    {
      multiplications.push(this.generateMultiplicationEquation(rowMultiplier, i))
    }
    return multiplications
  }
  private generateMultiplicationEquation(multiplierRow: number, multiplierColumn: number): Multiplication{
    return [multiplierColumn, multiplierRow, multiplierColumn * multiplierRow]
  }
}
