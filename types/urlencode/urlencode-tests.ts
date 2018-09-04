import * as urlencode from 'urlencode'

// $ExpectType string
urlencode.encode('')

// $ExpectType string
urlencode.encode({})

// $ExpectType string
urlencode.encode(1)

// $ExpectType string
urlencode.encode(['a', 'b', 'c'])

// $ExpectType string
urlencode.decode('')

// $ExpectType DefaultObject
urlencode.parse('')

// $ExpectType string
urlencode.stringify({})
