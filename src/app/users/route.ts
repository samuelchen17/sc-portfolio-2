import { NextResponse } from "next/server";

export const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const user = await request.json();
  const newUser = { id: users.length + 1, ...user };

  users.push(newUser);
  return new Response(JSON.stringify(newUser), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
