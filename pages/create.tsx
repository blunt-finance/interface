import { NextSeo } from "next-seo"
import { ConnectBlock, Container, CreateRoundForm } from "@components/ui"
import {
  defaultDescription,
  defaultTitle,
  longTitle,
  domain
} from "@components/common/Head"

export default function Create() {
  return (
    <>
      <NextSeo
        title="Create round | Blunt Finance"
        openGraph={{
          title: longTitle,
          description: defaultDescription,
          url: domain,
          images: [
            {
              url: `${domain}/og_image.png`,
              width: 1000,
              height: 1000,
              alt: `${defaultTitle} cover image`
            }
          ]
        }}
      />
      <Container page={true}>
        <ConnectBlock>
          <main className="max-w-screen-sm mx-auto space-y-10 ">
            <h1>Create blunt round</h1>
            <p className="mx-auto text-gray-600 max-w-screen-xs">
              Customize your project and program the round with a target, cap
              and deadline.
            </p>
            <hr className="w-20 !my-12 mx-auto border-gray-300" />
            <CreateRoundForm />
          </main>
        </ConnectBlock>
      </Container>
    </>
  )
}
