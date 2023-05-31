// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/api/:path*",
};

function getErrorResponse(status: number, message: string) {
  return new NextResponse(JSON.stringify({ success: false, message }), {
    status,
    headers: { "content-type": "application/json" },
  });
}

/**
 * Check to see that the path has an api token
 */
function hasApiToken(request: NextRequest) {
  const pathValidatorRegex = /^\/api\/generate-pdf\/*?$/;

  return !pathValidatorRegex.test(request.nextUrl.pathname);
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.method !== "GET") {
    return getErrorResponse(400, `Request method ${request.method} is not allowed.`);
  }

  if (!hasApiToken(request)) {
    return getErrorResponse(401, "The api key is missing or not valid.");
  }

  return undefined;
}
