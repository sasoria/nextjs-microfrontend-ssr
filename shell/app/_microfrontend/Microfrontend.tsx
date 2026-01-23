import parse from 'html-react-parser'
import { validate } from "@/app/utils"

export default async function Microfrontend() {
    const response = await fetch(`http://localhost:4321}`)
    const html = await response.text()
    const microfrontend = parse(html)

    return (
      <div>
          {validate(microfrontend) && microfrontend.map((JSXElement) => JSXElement)}
      </div>
    )
}