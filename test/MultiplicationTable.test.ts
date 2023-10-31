import {MultiplicationTable} from '../src/MultiplicationTable'


describe('Multiplication Table', () => {
  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.renderMultiplicationTable(start, end)

    //then
    expect(rendered).toBe(`2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16`)

  })

  it('should return null when the start less than 1', ()=>{
    const table = new MultiplicationTable()
    const start=0
    const end=100

    // when
    const rendered = table.renderMultiplicationTable(start, end)

    expect(rendered).toBeNull()
  })

  it('should return null when the end greater than 1000', ()=>{
    const table = new MultiplicationTable()
    const start=10
    const end=1200

    // when
    const rendered = table.renderMultiplicationTable(start, end)

    expect(rendered).toBeNull()
  })

})
