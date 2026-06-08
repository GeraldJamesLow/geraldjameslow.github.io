import type { DieCountRow } from './LiarsDiceLogic'

type DiceCountTableProps = {
  rows: DieCountRow[]
}

export function DiceCountTable({ rows }: DiceCountTableProps) {
  return (
    <table className="dice-count-table">
      <thead>
        <tr>
          <th>Die Value</th>
          <th>Count</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row.dieValue}>
            <td>{row.dieValue}</td>
            <td>{row.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}