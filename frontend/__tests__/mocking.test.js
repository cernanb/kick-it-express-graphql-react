function Person(name, foods) {
  this.name = name
  this.foods = foods
}

describe('mocking learning', () => {
  it('mocks a reg function', () => {
    const fetchDogs = jest.fn()
    fetchDogs('snickers')
    expect(fetchDogs).toHaveBeenCalled()
    expect(fetchDogs).toHaveBeenCalledWith('snickers')
    fetchDogs()
    expect(fetchDogs).toHaveBeenCalledTimes(2)
  })

  it('can create a person', () => {
    const me = new Person('Cernan', ["pizza, 'burgers'"])

    expect(me.name).toEqual('Cernan')
  })

  it('can fetch foods', async () => {
    const me = new Person('Cernan', ['pizza', 'burgers'])
    me.fetchFavFoods = jest.fn().mockResolvedValue(['sushi', 'ramen'])
    const favFoods = await me.fetchFavFoods()
    expect(favFoods).toContain('sushi')
  })
})
