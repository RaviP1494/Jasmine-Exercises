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
        expect(paymentTbody.firstElementChild.tagName).toEqual('TR');
        expect(paymentTbody.firstElementChild.firstElementChild.innerText).toEqual('$50');
        expect(paymentTbody.firstElementChild.lastElementChild.previousElementSibling.innerText).toEqual('20%');
    });

    it("should update summary table row td's when calling updateSummary()", function () {
        submitPaymentInfo();
        updateSummary();
        expect(summaryTds[0].innerText).toEqual('$50');
        expect(summaryTds[1].innerText).toEqual('$10');
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