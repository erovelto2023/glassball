import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)'])

export default clerkMiddleware(async (auth, req) => {
  console.log('Middleware running for:', req.nextUrl.pathname)
  const authResult = await auth()
  console.log('Auth result:', { isAuthenticated: authResult.isAuthenticated })

  if (!authResult.isAuthenticated && isProtectedRoute(req)) {
    console.log('User not authenticated, redirecting to sign in')
    return authResult.redirectToSignIn({ returnBackUrl: req.url })
  } else if (authResult.isAuthenticated) {
    console.log('User is authenticated, allowing access to:', req.nextUrl.pathname)
    if (['/sign-in', '/sign-up'].includes(req.nextUrl.pathname)) {
      const url = new URL('/dashboard', req.url)
      return Response.redirect(url)
    }
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}