/**
 * Created by Mohamed on 27/07/2016.
 */
var nodeController = require('../controller');
describe("IsConnected", function(){
    this.simpleMath = new SimpleMath();
    it("should connected by user", function () {
        expect(this.simpleMath.getFactorial(1)).toBe(1);
    })
})
