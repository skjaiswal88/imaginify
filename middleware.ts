import { authMiddleware } from "@clerk/nextjs";
 
// export default authMiddleware({
//   publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
// });

export default authMiddleware({
  publicRoutes: ['/api/webhooks/clerk']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};