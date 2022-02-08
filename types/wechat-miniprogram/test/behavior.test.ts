// $ExpectType string
Behavior({})

Behavior({
  behaviors: [],
  properties: {
    myProperty: {
      type: String,
      value: '',
    },
    myProperty2: String,
    min: {
      type: Number,
      value: 0,
    },
    max: {
      type: Number,
      value: 0,
      observer(newVal, oldVal) {
        // $ExpectType number
        newVal
        // $ExpectType string
        oldVal.toExponential()
      },
    },
  },
  data: {
    text: 'init data',
    array: [{ msg: '1' }, { msg: '2' }],
    logs: [] as string[],
  },
  attached() {},
  methods: {
    myBehaviorMethod() {
      // $ExpectType never
      this.created
      // $ExpectType string
      this.data.text
      // $ExpectType string
      this.properties.text
      // $ExpectType number
      this.data.max
      // $ExpectType string
      this.properties.myProperty2
    },
  },
})

Behavior({
  attached() {},
  pageLifetimes: {
    show() {},
  },
})
