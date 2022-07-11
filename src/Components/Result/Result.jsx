import React from 'react'
import Table from '../Table/Table'
import TableSum from '../TableSum/TableSum'

export default function Result({ diserts }) {
  return (
    <div>
      <TableSum diserts={diserts} />
      <Table diserts={diserts} />
    </div>
  )
}
