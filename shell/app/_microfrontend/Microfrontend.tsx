import parse from "html-react-parser"
import { validate } from "@/app/utils"

interface Props {
    url: string
}

export default async function Microfrontend({ url }: Props) {
    const response = await fetch(url)
    const html = await response.text()
    const microfrontend = parse(html)

    return (
      <div>
          {validate(microfrontend) && microfrontend.map((JSXElement) => JSXElement)}
      </div>
    )
}