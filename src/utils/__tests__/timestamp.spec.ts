import { tsToDate } from '../timestamp'

describe('tsToDate', () => {
  it('should return hh:mm string from timestamp 1625637849', () => {
    let ts = 1625637849;
    const expected = "08:04"
    expect(tsToDate(ts)).toEqual(expected)
  })
  it('should return hh:mm string from timestamp 1625648667', () => {
    let ts = 1625648667;
    const expected = "11:04"
    expect(tsToDate(ts)).toEqual(expected)
  })
})
