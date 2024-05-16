"use client";

export default function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="p-2 border border-black">
      {value}
    </button>
  );
}