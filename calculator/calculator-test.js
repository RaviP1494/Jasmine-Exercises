
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 10000, years: 5, rate: 2 })).toEqual('1666.83');
});


it("should return a result with 2 decimal places", function () {
  expect(parseFloat(calculateMonthlyPayment({ amount: 1000, years: 5, rate: 2 })) * 1000 % 10).toEqual(0);
});

/// etc
