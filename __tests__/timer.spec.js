const countdown = require('../src/timer.js');
jest.useFakeTimers(); // <= This mocks out any call to setTimeout, setInterval with dummy functions

describe('timer suite', function() {
  // test('Should call the done callback when the timer has finished counting', function(done) {
  //   const progressCallbackSpy = jest.fn();
  //   const doneCallbackSpy = jest.fn(function () {
  //     expect(progressCallbackSpy.mock.calls.length).toBe(1); // <= How many times it was called
  //     const firstCall = progressCallbackSpy.mock.calls[0];
  //     const firstCallArg = firstCall[0];
  //     expect(firstCallArg).toBe(1); // <= first param, of the first call,  is number 1
  //     done();
  //   });

  //   countdown(1, progressCallbackSpy, doneCallbackSpy);
  // });

  // test('Should call the done callback when the timer has finished counting and the countdown is 4 secs', function(done) {
  //   const progressCallbackSpy = jest.fn();
  //   const doneCallbackSpy = jest.fn(function() {
  //     expect(progressCallbackSpy.mock.calls.length).toBe(4);
  //     done();
  //   });

  //   countdown(4, progressCallbackSpy, doneCallbackSpy);
  // });

  test('Should call the done callback when the timer has finished counting', function() {
    const progressCallbackSpy = jest.fn();
    const doneCallbackSpy = jest.fn();
    countdown(1, progressCallbackSpy, doneCallbackSpy);

    jest.runTimersToTime(1000); // <= Move the time ahead with 1 second

    expect(progressCallbackSpy.mock.calls.length).toBe(1);
    const firstCall = progressCallbackSpy.mock.calls[0];
    const firstCallArg = firstCall[0];
    expect(firstCallArg).toBe(1);
  });

 test('Should call the done callback when the timer has finished counting and the countdown is 4 secs', function() {
    const progressCallbackSpy = jest.fn();
    const doneCallbackSpy = jest.fn();

    countdown(4, progressCallbackSpy, doneCallbackSpy);

    jest.runTimersToTime(4000); // <= Move the time ahead with 4 seconds

    expect(progressCallbackSpy.mock.calls.length).toBe(4);
  });
});