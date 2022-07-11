import RowSum from './RowSum'

export default function TableSum(props) {
  const summaryMap = new Map()

  props.diserts?.forEach((disert) => {
    if (summaryMap.has(disert.year)) {
      const newValue = summaryMap.get(disert.year) + 1
      summaryMap.set(disert.year, newValue)
    } else {
      summaryMap.set(disert.year, 1)
    }
  })

  const summary = []
  summaryMap.forEach((value, key) => {
    summary.push({ year: key, count: value })
  })

  return (
    <table border="1">
      <caption>Таблица итого</caption>
      <thead>
        <tr>
          <th>Колличество</th>
          <th>Год</th>
        </tr>
      </thead>
      <tbody>
        {summary.map((item) => (
          <RowSum key={item.year} count={item.count} year={item.year}/>
        ))}
      </tbody>
    </table>
  )
}
