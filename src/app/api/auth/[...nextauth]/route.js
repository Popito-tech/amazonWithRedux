import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      // ...add more providers here
    ],
  }


const handler = NextAuth(authOptions)
  
  export { handler as GET, handler as POST }