"use client";

import { add } from "@repo/core";

interface CalculatorProps {
  a: number;
  b: number;
}

export function Calculator({ a, b }: CalculatorProps) {
  const result = add(a, b);

  return (
    <div data-testid="calculator">
      <p>
        {a} + {b} = <span data-testid="result">{result}</span>
      </p>
    </div>
  );
}
