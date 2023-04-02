* 4.16.2: There was an error in the types for the event data of the `input`
  event. The properties of the even data depend on the `mode` setting of the
  tagify instance. In particular, when the mode is set to `mix`, the properties
  did not match the declared typings. This behavior is an unfortunate design
  choice with regards to static typing. As a result, the typings have now been
  changed to union type of all possible event details objects. This change may
  break existing code, but code may already have been broken if it assumed a
  particular value for the `mode` setting. It may have been possible to encode
  the setting property as a type parameter, but this would greatly increase the
  complexity of the typings for too little gain in the end, and would most
  likely also break existing code. To fix your code, either cast to
  `InputEventDataNormal` or`InputEventDataMix`; or check for the presence of the
  properties, e.g. `"textContent" in event.detail`.
