/* eslint-disable no-unused-vars */
import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {value:0}
const cartCountSlice = createSlice({
  name: 'cartCount',
  initialState,
  reducers: {
	increment: state => state.value += 1,
	decrement: state => state.value -= 1
  }
})

export const { increment, decrement } = cartCountSlice.actions
export default cartCountSlice.reducer




