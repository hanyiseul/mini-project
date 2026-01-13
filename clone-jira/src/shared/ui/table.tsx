import React from "react";

export type Column<T, K extends keyof T = keyof T> = {
  key: K;
  header: string;
  render?: (value: T[K], row: T) => React.ReactNode;
};

type TableProps<T extends { id: number | string }> = {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (row: T) => void;
};

export function Table<T extends { id: number | string }>({
  data,
  columns,
  onRowClick
}: TableProps<T>) {
  return (
    <table className="min-w-full text-sm text-left">
      <thead className="border-b text-sm uppercase">
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)} className="border-r last:border-r-0 px-4 py-3 font-medium tracking-wider">{col.header}</th>
          ))}
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {data.map((row) => (
          <tr key={row.id} className={"hover:bg-gray-100 transition-colors" + (onRowClick ? " cursor-pointer" : "")} onClick={() => onRowClick?.(row)}>
            {columns.map((col) => (
              <td key={String(col.key)} className="border-r last:border-r-0 px-4 py-3 text-gray-700">
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
