import { useState } from 'react'
import { CounterHook } from '../hooks/CounterHook';

export const Counter = () => {
	const [counter, setCounter] = CounterHook(0);
	const [countError, setCountError] = useState(false)

	const incrementHandler = () => {
		if (counter < 10) {
			setCounter(prev => prev + 1)
		}
		if (counter >= 0) {
			setCountError(false)
		}
	}

	const decrementHandler = () => {
		return counter > 0 ? setCounter(prev => prev - 1) : setCountError(true)
	}

	return (
		<div className='count'>
			<p>Counter: {counter}</p>
			{countError && <p>Error counter</p>}
			<div className='count__btns'>
				<button onClick={() => incrementHandler()}>+</button>
				<button onClick={() => decrementHandler()}>-</button>
			</div>
		</div>
	)
}
