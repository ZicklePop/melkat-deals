# [melkat.deals](https://melkat.deals)

a faux referral link ad network for myself

* managed with [Raindrop.io](https://raindrop.io)
* has an api at `/api`
* chooses ads based on weight

Try it:
- [webpage](https://melkat.deals)
- [api](https://melkat.deals/api)


## getting started

you will need:

* [a Raindrop token](https://app.raindrop.io/#/settings/apps/dev)
* the ID of a collection for links you want to share

next up:

1. Copy the build environment example:   
  `cp .env.example .env`
2. Put the information you gathered above in
3. You can now run `npm run dev` to start locally
4. (For deploying on Vercel) Add your variables to your Vercel app as secrets:   
  `vercel secrets add raindrop-token [value]`   
  `vercel secrets add deals-raindrop-collection-id [value]`


## how does weighting work?

i'm using the [pick-random-weighted package by alvarocastro](https://github.com/alvarocastro/pick-random-weighted) and the links are weighted in the Raindrop.io collection by having tags that are `w-${number}` so `w-10` will have a weight of `10`. something weighted higher will show up more often when calling `/api`
