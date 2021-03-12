describe('helpers tests', function () {
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        billAmtInput.value = 40;
        tipAmtInput.value = 5;
        submitPaymentInfo();
    });

    it('should calculate sumPaymentTotal() of bill amount and tip amount', function () {
        expect(sumPaymentTotal('billAmt')).toBe(90);
        expect(sumPaymentTotal('tipAmt')).toBe(15);
    });

    it('should calculate tip percentage accurately', function () {
        expect(calculateTipPercent(100, 17)).toBe(17);
        expect(calculateTipPercent(1, 5)).toBe(500);
    })

    it('should append td to tr', function () {
        expect(paymentTbody.firstElementChild.firstElementChild.tagName).toBe('TD');
        expect(paymentTbody.lastElementChild.lastElementChild.tagName).toBe('TD');
    })

    afterEach(function () {
        allPayments = {};
        paymentId = 0;
        updateSummary();
        while (paymentTbody.firstElementChild) {
            paymentTbody.firstElementChild.remove();
        }
    });

});