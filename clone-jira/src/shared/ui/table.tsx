import React from "react";

export type Column<T, K extends keyof T = keyof T> = {
  key: K;
  header: string;
  render?: (value: T[K], row: T) => React.ReactNode;
};

type TableProps<T extends { id: number }> = {
  data: T[];
  columns: Column<T>[];
};

export function Table<T extends { id: number }>({
  data,
  columns,
}: TableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)}>{col.header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <td key={String(col.key)}>
                {col.render
                  ? col.render(row[col.key], row)
                  : String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
