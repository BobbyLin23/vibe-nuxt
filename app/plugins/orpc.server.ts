import { createRouterClient } from '@orpc/server'
import { createTanstackQueryUtils } from '@orpc/tanstack-query'
import { router } from '~~/server/router'

export default defineNuxtPlugin(() => {
  const client = createRouterClient(router, {
    context: {
      // headers: event?.headers, // provide headers if initial context required
    },
  })

  const orpc = createTanstackQueryUtils(client)

  return {
    provide: {
      orpc,
    },
  }
})
