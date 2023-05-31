### Why are we using both Github Actions and CircleCI??

Ideally, we should be using one tool for CI workflows. However, for publishing packages to NPM we are relying on the [Changetsets Release Action](https://github.com/changesets/action), which is only available for Github Actions.

So our rule of thumb for now is: use CircleCI for all workflows where possible, the one exception being releases.
