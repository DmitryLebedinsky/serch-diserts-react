import React from 'react'

export default function Row(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>{props.year}</td>
    </tr>
  )
}
