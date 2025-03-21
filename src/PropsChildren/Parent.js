import React from 'react'
import Child from './Child'


export default function Parent() {
  return (
    <>
      <Child ime='ana'><p>children text</p></Child>
      <div>Parent</div>
    </>
  )
}
