const {sum} = require('./utility/redis')

test('sum of a+b is equals 3',()=>{
    expect(sum(2,1)).toBe(3);
});