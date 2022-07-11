import React from 'react'

export default function RowSum(props) {
  return (
    <tr>
      <td>{props.count}</td>
      <td>{props.year}</td>
    </tr>
  )
}
