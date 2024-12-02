import React from "react";

export default function ChildServer({ prop }: { prop: string }) {
  return <div>ChildServer received: {prop}</div>;
}
