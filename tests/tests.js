var expect = chai.expect;

// PROBLEM `checkData`
describe('add', function() {
	it('should exist', function() {
		expect(add).to.not.be.undefined;
	});
	// it('should not accept invalid input', function() {
	// 	expect(function() { checkData() }).to.throw('Invalid Input');
	// 	expect(function() { checkData('') }).to.not.throw('Invalid Input');
	// 	expect(function() { checkData('a') }).to.not.throw('Invalid Input');
	// 	expect(function() { checkData(null) }).to.throw('Invalid Input');
	// 	expect(function() { checkData(undefined) }).to.throw('Invalid Input');
	// 	expect(function() { checkData(NaN) }).to.throw('Invalid Input');
	// 	expect(function() { checkData([1,2,3]) }).to.throw('Invalid Input');
	// 	expect(function() { checkData({}) }).to.throw('Invalid Input');
	// 	expect(function() { checkData(7) }).to.throw('Invalid Input');
	// });
	it('should return the sum of 1 and 2', function() {
		expect(add("1","2")).to.equal(3);
 	});
});
// 	it('should return false if the string is "a"', function() {
// 		expect(checkData('a')).to.be.false;
// 	});
// 	it('should return false if the string is "3"', function() {
// 		expect(checkData('3')).to.be.false;
// 	});
// 	it('should return false if the string is "3a"', function() {
// 		expect(checkData('3a')).to.be.false;
// 	});
// 	it('should return false if the string is "bbbb"', function() {
// 		expect(checkData('bbbb')).to.be.false;
// 	});
// 	it('should return false if the string is "this is a test"', function() {
// 		expect(checkData('this is a test')).to.be.false;
// 	});
// 	it('should return true if the string is "aaa"', function() {
// 		expect(checkData('aaa')).to.be.true;
// 	});
// 	it('should return true if the string is "abc"', function() {
// 		expect(checkData('abc')).to.be.true;
// 	});
// 	it('should return true if the string is "A7s"', function() {
// 		expect(checkData('A7s')).to.be.true;
// 	});
// 	it('should return true if the string is "NjD"', function() {
// 		expect(checkData('NjD')).to.be.true;
// 	});
// });
