import { useState } from 'react'

export const CounterHook = (count = 0) => {
	const [counter, setCounter] = useState(count)

	return [counter, setCounter];
}
