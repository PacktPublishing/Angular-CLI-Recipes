import { RatingPipe } from './rating.pipe';

describe('RatingPipe', () => {
  it('create an instance', () => {
    const pipe = new RatingPipe();
    expect(pipe).toBeTruthy();
  });
  it('rate excellent movies', () => {
    const pipe = new RatingPipe();
    const result = pipe.transform(9);
    const expected = 'excellent';

    expect(result).toEqual(expected);
  });
});
