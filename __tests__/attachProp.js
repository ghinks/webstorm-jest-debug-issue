import {attachProp} from '../src/attachProp'

test('Expect to be attach offer', () => {
    const next = (req, res, next) => expect(req).toEqual(expect.objectContaining({offer: {value: true}}))
    const req = {};
    attachProp(req, null, next)
})
