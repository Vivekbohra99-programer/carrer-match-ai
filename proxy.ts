import { auth } from "@/auth"
import { NextResponse } from "next/server"

const protectedRoutes = ["/dashboard", "/applications", "/resumes", "/match", "/cover-letters", "/analytics", "/interviews", "/settings", "/preferences"]

export const proxy = auth((req) => {
  const isLoggedIn = !!req.auth
  const isProtectedRoute = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
