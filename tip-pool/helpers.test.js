describe('helpers tests', function () {
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        billAmtInput.value = 40;
        tipAmtInput.value = 5;
        submitPaymentInfo();
        serverNameInput.value = 'John';
        submitServerInfo();
        updateServerTable();
    });

    it('should calculate sumPaymentTotal() of bill amount and tip amount', function () {
        expect(sumPaymentTotal('billAmt')).toBe(90);
        expect(sumPaymentTotal('tipAmt')).toBe(15);
    });

    it('should calculate tip percentage accurately', function () {
        expect(calculateTipPercent(100, 17)).toBe(17);
        expect(calculateTipPercent(1, 5)).toBe(500);
    });

    it('should append td to tr when running appendtr()', function () {
        expect(paymentTbody.firstElementChild.firstElementChild.tagName).toBe('TD');
        expect(paymentTbody.lastElementChild.lastElementChild.tagName).toBe('TD');
    });

    it('should append delete button with x at end of tr', function () {
        expect(paymentTbody.firstElementChild.lastElementChild.innerText).toBe('X');
        expect(paymentTbody.firstElementChild.lastElementChild.tagName).toBe('TD');
        expect(serverTbody.firstElementChild.lastElementChild.innerText).toBe('X');
        expect(serverTbody.firstElementChild.lastElementChild.tagName).toBe('TD');
    });



    afterEach(function () {
        //    serverNameInput.value = "";
        billAmtInput.value = "";
        tipAmtInput.value = "";
        allServers = {};
        serverId = 0;
        allPayments = {};
        paymentId = 0;
        updateServerTable();
        updateSummary();
        while (paymentTbody.firstElementChild) {
            paymentTbody.firstElementChild.remove();
        }
    });

});