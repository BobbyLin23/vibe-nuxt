import type { z } from 'zod'
import type { UserSchema } from '~~/server/schemas/user'
import { ORPCError } from '@orpc/client'
import { os } from '@orpc/server'
import { dbProviderMiddleware } from '~~/server/middlewares/db'

export interface ORPCContext {
  user?: z.infer<typeof UserSchema>
}

export const pub = os.$context<ORPCContext>().use(dbProviderMiddleware)

export const authed = pub.use(({ context, next }) => {
  if (!context.user) {
    throw new ORPCError('UNAUTHORIZED')
  }

  return next({
    context: {
      user: context.user,
    },
  })
})
