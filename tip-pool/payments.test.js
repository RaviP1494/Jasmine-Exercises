describe('payments tests', function () {
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
    });

    it('should add payment to allPayments when submitPaymentInfo() is called', function () {
        submitPaymentInfo();
        expect(allPayments['payment' + paymentId].billAmt).toEqual('50');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('10');
    });

    it('should return payment object when calling createCurPayment()', function () {
        let pay = createCurPayment();
        expect(pay.billAmt).toEqual('50');
        expect(pay.tipAmt).toEqual('10');
    });

    it('should add row to Payment Table when calling appendPaymentTable()', function () {
        let pay = createCurPayment();
        appendPaymentTable(pay);
    });

    afterEach(function () {
        paymentId = 0;
        allPayments = {};
        while (paymentTbody.firstElementChild) {
            paymentTbody.firstElementChild.remove();
        }
        updateSummary();
    });
});