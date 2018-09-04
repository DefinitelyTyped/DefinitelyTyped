import * as React from 'react'
import * as CurrencyFormatter from 'react-currency-formatter'

type Props = {
	price: number,
	currency: string,
}

const ProductionPrice: React.SFC<Props> = (props: Props) => (
	<CurrencyFormatter quantity={props.price} currency={props.currency} />
)

export default ProductionPrice
