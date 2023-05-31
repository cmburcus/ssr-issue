# Test repo

You need `pnpm`. We use `pnpm@7.9.1` due to an issue with newer versions (waiting for a fix).

Run `pnpm install`

Then `pnpm build`

You should notice there is an error indicating some SSR issues in the `apps/report`. However, the issue originates from `packages/ui`.

If the `localization` part is removed in the `packages/ui/src/components/Text/index.tsx`, the build succeeds. I can confirm that the `packages/localization` functions correctly otherwise, because we are using it in production for an app that does not use SSR.

Note: After the above, you can also do `pnpm clean && pnpm install && pnpm build`. Sometimes not cleaning causes other issues.
