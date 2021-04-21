const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
    expect(actual).toBe(actual)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(input).toBe(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  const original = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
  const actual = utils.trimPropertiesMutation(input)


  test('[3] returns an object with the properties trimmed', () => {
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    expect(input).not.toEqual(original)
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const initial = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    const actual = utils.findLargestInteger(initial);
    const expected = 3;
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    let count = counter.countDown()
    const expected = 3
    expect(count).toEqual(expected)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    let count = counter.countDown()
    const expected = 2
    expect(count).toEqual(expected)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    const count = counter.countDown();
    const expected = 0;
    expect(count).toEqual(expected);
  })
})

describe('[Exercise 5] Seasons', () => {
  const nextSeason = (num) => {
    for (let i = 0; i < num; i++) {
      seasons.next()
    }
  }
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const currentSeason = seasons.next()
    const expected = "summer";
    expect(currentSeason).toEqual(expected)
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const currentSeason = seasons.next()
    const expected = "fall";
    expect(currentSeason).toEqual(expected)
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    nextSeason(2)
    const currentSeason = seasons.next()
    const expected = "winter";
    expect(currentSeason).toEqual(expected)
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    nextSeason(3)
    const currentSeason = seasons.next()
    const expected = "spring";
    expect(currentSeason).toEqual(expected)
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    nextSeason(4)
    const currentSeason = seasons.next()
    const expected = "summer";
    expect(currentSeason).toEqual(expected)
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    nextSeason(39)
    const currentSeason = seasons.next()
    const expected = "spring";
    expect(currentSeason).toEqual(expected)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const newOdometer = focus.drive(100);
    const expected = 100
    expect(newOdometer).toEqual(expected);
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(30);
    let expected = 19;
    let actual = focus.tank;
    expect(actual).toEqual(expected);
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600);
    expect(focus.tank).toEqual(0);
    focus.refuel(20);
    const lastOdometer = focus.drive(600);
    const expectedOdometer = 1200;
    expect(lastOdometer).toEqual(expectedOdometer);
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    const expectedTank = 20;
    focus.refuel(50);
    const actualTank = focus.tank;
    expect(actualTank).toEqual(expectedTank);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const isEven = await utils.isEvenNumberAsync(2)
    const expected = true;
    expect(isEven).toEqual(expected);
  })
  test('[20] resolves false if passed an odd number', async () => {
    const isEven = await utils.isEvenNumberAsync(3);
    const expected = false;
    expect(isEven).toEqual(expected);
  })
  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    const isEven = await utils.isEvenNumberAsync("bob")
    const expected = "number must be a number";
    expect(isEven).toEqual(expected);
  })
  test('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    const isEven = await utils.isEvenNumberAsync(NaN)
    const expected = "number must be a number";
    expect(isEven).toEqual(expected);
  })
})
