// reducerで重ねて使用するので定数にに格納しておく
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// action creaters
export const increment = () => ({
		type: INCREMENT
})

export const decrement = () => ({
		type: DECREMENT
})
