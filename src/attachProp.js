const attachProp = (req, res, next) =>  {
    req.offer = {value: true}
    next(req)
}
export {attachProp}
