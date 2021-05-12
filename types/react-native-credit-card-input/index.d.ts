import * as React from "react";

export type FormStatus =
  'incomplete'
  | 'invalid'
  | 'valid'

export type CardType =
  | null
  | 'visa'
  | 'master-card'
  | 'american-express'
  | 'diners-club'
  | 'discover'
  | 'jcb'
  | 'unionpay'
  | 'maestro'

export interface ICardData {
  number: string
  expiry: string
  cvc?: string
  type: CardType
  name?: string
  postalCode?: string
}

export interface IFormDataStatus {
  number: FormStatus
  expiry: FormStatus
  cvc?: FormStatus
  name?: FormStatus
  postalCode?: FormStatus
}

export interface IFormData {
  valid: boolean
  values: ICardData
  status: IFormDataStatus
}

export interface IInputPlaceholders {
  name: string
  number: string
  expiry: string
  cvc: string
  postalCode: string
}

export interface ILiteCreditCardInputs {
  autoFocus?: boolean
  onChange: (formData: IFormData) => void
  onFocus?: (name: string) => void
  placeholders?: IInputPlaceholders
  inputStyle?: object
  validColor?: string
  invalidColor?: string
  placeholderColor?: string
  additionalInputsProps?: object
}

export interface ICreditCardInputs {
  autoFocus?: boolean
  onChange: (formData: IFormData) => void
  onFocus?: (name: string) => void
  labels?: IInputPlaceholders
  placeholders?: IInputPlaceholders
  cardScale?: number
  cardFontFamily?: string
  cardImageFront?: number
  cardImageBack?: number
  labelStyle?: object
  inputStyle?: object
  inputContainerStyle?: object
  validColor?: string
  invalidColor?: string
  placeholderColor?: string
  requiresName?: boolean
  requiresCVC?: boolean
  requiresPostalCode?: boolean
  validatePostalCode?: () => boolean
  allowScroll?: boolean
  cardBrandIcons?: object
  additionalInputsProps?: object
}

export interface CardViewInputs {
  focused?: 'cvc' | 'expiry'
  brand?: string
  name?: string
  number?: string
  expiry?: string
  cvc?: string
  paceholder?: object
  scale?: number
  fontFamily?: string
  imageFront?: number
  imageBack?: number
  customIcons?: object
}

export class CreditCardInput extends React.Component<ICreditCardInputs> { }

export class LiteCreditCardInput extends React.Component<ICreditCardInputs> { }

export class CardView extends React.Component<CardViewInputs> { }
