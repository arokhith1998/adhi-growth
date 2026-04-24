import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  if (path.startsWith('/ref/')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}

export const config = {
  matcher: '/ref/:path*',
}
