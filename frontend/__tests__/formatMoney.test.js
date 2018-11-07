import formatMoney from '../lib/formatMoney'

describe('formatMoney function', () => {
  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('$0.01')
    expect(formatMoney(40)).toEqual('$0.40')
  })

  it('leaves cents off for whole dollars', () => {
    expect(formatMoney(5000)).toEqual('$50')
    expect(formatMoney(100)).toEqual('$1')
    expect(formatMoney(500)).toEqual('$5')
    expect(formatMoney(50000000)).toEqual('$500,000')
  })

  it('works with whole and fractional dollars', () => {
    expect(formatMoney(1250)).toEqual('$12.50')
    expect(formatMoney(101)).toEqual('$1.01')
    expect(formatMoney(324242342342)).toEqual('$3,242,423,423.42')
  })
})
