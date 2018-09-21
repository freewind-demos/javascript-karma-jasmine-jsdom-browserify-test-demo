describe('hello', function () {

    it('should use jquery to get text of some html code', function () {
        expect(hello('<div>JQuery</div>')).toBe('JQuery')
    })

})
