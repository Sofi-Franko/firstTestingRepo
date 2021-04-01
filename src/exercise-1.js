/*
can't use Boolean(value)
consume any number of parameters
return array of objects
object per single param passed to the function
each object should contains:
   - isFalsy
   - type
   - stringLength
   - index
  [
        {
            "isFalsy": false,
            "type": "number",
            "StringLength": 1,
            "index": 0
        },
        ...
  ]
 */

function getInfo(...values) {
    const results = [];

    values.forEach((value, i) => {
        results.push(
            {
                isFalsy: !value,
                type: typeof value,
                StringLength: value.toString().length,
                index: i
            }
        )
    });

    return results
}

module.exports = getInfo;

