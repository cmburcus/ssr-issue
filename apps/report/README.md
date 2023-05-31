## Getting Started

### Install dependencies:

```bash
pnpm i
```

### Setup the API:

- Start the local API on port 8000, then run ngrok to tunnel it to a public URL (ie. ngrok HTTP 8000)
- Take the URL from ngrok and set it in `packages/client-library/.env.local`
- Set your API key in `apps/report/.env.local` as `NEXT_LL_API_KEY=<YOUR KEY>`

### Build project:

```bash
pnpm build
```

### Run the development server:

CD into `apps/report` and run

```bash
pnpm dev
```

Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.

## Usage

### Preview

You can preview the generated PDF by visiting:
http://localhost:3005/pdf-preview

The pdf is generated server-side with Puppeteer. (Puppeteer will go to that endpoint, generate the PDF, and stream the result to the client).

### Generation

To generate an actual report, you have to send a `GET` request to `http://localhost:3005/api/generate-pdf` with the following query params:

| Key          | Description                                                             | Is required | Type   |
| ------------ | ----------------------------------------------------------------------- | ----------- | ------ |
| api_key      | The authorization token that allows access to our data                  | true        | string |
| lat          | Location latitude between -90 and 90                                    | true        | number |
| lng          | Location longitude between -180 and 180                                 | true        | number |
| broker_name  | Name of the broker generating the report `(currently not used)`         |             | string |
| broker_email | Email of the broker generating the report `(currently not used)`        |             | string |
| broker_phone | Phone number of the broker generating the report `(currently not used)` |             | string |

### Errors

The following errors will be returned instead of the generated report if incorrect data is supplied:

| Description                                                                                                        | Message                                                                | Error code |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | ---------- |
| Calling `/api/generate-pdf` with a method other than `GET`                                                         | { success: false, message: "Request method <method> is not allowed." } | 400        |
| Missing `api_key` or supplying an invalid key (Currently we do not validate the api_key)                           | { success: false, message: "The api key is missing or not valid." }    | 401        |
| Query params supplied fail validation. If there is more than one error, they will be included in the errors array. | { success: false, errors: ["Validation error"] }                       | 400        |
