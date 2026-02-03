import MicrofrontendA from "@/app/_microfrontend/MicrofrontendA";
import MicrofrontendB from "@/app/_microfrontend/MicrofrontendB";
import { Suspense } from "react";

export default function Home() {
  return (
      <main>
          <h1>Produktside</h1>
          <h2>Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi
              nisl aliquam enim, eget facilisis enim nisl nec elit. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Integer ac sem euismod, dictum erat at, dictum enim.</p>
          <Suspense fallback={<div>Loading...</div>}>
              <MicrofrontendA />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
              <MicrofrontendB />
          </Suspense>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis enim nisl nec elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac sem euismod, dictum erat at, dictum enim. Mauris euismod, sapien eu dictum dictum, sem enim dictum enim, eu dictum sem enim euismod enim. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis enim nisl nec elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac sem euismod, dictum erat at, dictum enim. Mauris euismod, sapien eu dictum dictum, sem enim dictum enim, eu dictum sem enim euismod enim. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis enim nisl nec elit.
          </p>
      </main>
  );
}
