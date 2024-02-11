/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/H0f3lQnOC5H
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export function Landing() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Inventory System</h1>
              <p
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The complete platform for managing your inventory. Easily track your products, manage stock levels, and
                fulfill orders.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
              <p
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out our top picks. These are the products our customers love the most.
              </p>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <div className="grid aspect-square overflow-hidden rounded-t-lg">
                  <img
                    alt="Image"
                    className="object-cover object-center"
                    height="400"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/400",
                      objectFit: "cover",
                    }}
                    width="400" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold">Product One</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the product. It's really great and you should buy it.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div className="grid aspect-square overflow-hidden rounded-t-lg">
                  <img
                    alt="Image"
                    className="object-cover object-center"
                    height="400"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/400",
                      objectFit: "cover",
                    }}
                    width="400" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold">Product Two</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the product. It's really great and you should buy it.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <div className="grid aspect-square overflow-hidden rounded-t-lg">
                  <img
                    alt="Image"
                    className="object-cover object-center"
                    height="400"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/400",
                      objectFit: "cover",
                    }}
                    width="400" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold">Product Three</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of the product. It's really great and you should buy it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What our customers say</h2>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-start gap-4">
                <div className="rounded-full overflow-hidden aspect-square w-24">
                  <img
                    alt="Avatar"
                    className="rounded-full object-cover object-center"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    “The inventory system has been a game-changer for our business. It's so easy to keep track of our
                    stock levels and we've seen a significant improvement in our order fulfillment times. Highly
                    recommended!”
                  </p>
                  <p className="font-semibold">Alice Johnson</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Acme Inc. |
                    <Link className="underline underline-offset-2" href="#">
                      View Profile
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full overflow-hidden aspect-square w-24">
                  <img
                    alt="Avatar"
                    className="rounded-full object-cover object-center"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    “As a small business owner, I was looking for an inventory system that was both affordable and
                    feature-rich. I'm happy to say that I found it with this platform. It has everything I need to
                    manage my inventory and the customer support has been excellent.”
                  </p>
                  <p className="font-semibold">Mark Smith</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Acme Inc. |
                    <Link className="underline underline-offset-2" href="#">
                      View Profile
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div
            className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}


function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}