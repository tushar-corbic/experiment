import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              {/* <Link href={`/author/${author?.slug}`}> */}
              {imageProps && (
                <Image
                  src={imageProps?.src}
                  alt={author?.name || " "}
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover"
                />
              )}
              {/* </Link> */}
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          At Kozyclan, we believe that every gathering is an opportunity for unforgettable fun and connection. Our mission is to transform any party, event, or casual get-together into a memorable experience with our unique, engaging social games. Whether you’re hosting a cozy family dinner, a lively birthday bash, or a corporate team-building event, Kozyclan has the perfect game to elevate the atmosphere and bring people closer together.
        </p>
        <p>
          <h3>Why Choose Kozyclan?</h3>
          <h4>Innovative Game Design</h4>
          <p>Our creative team of game designers crafts original games that are easy to learn, inclusive, and endlessly entertaining. We focus on fostering laughter, teamwork, and meaningful interactions.
          </p>
          <h4>Versatile Options</h4>
          From icebreakers to strategy games and hilarious party activities, our diverse game collection caters to all ages and preferences. No matter the occasion, you’ll find a game that fits your theme and audience.

          <h4>User-Friendly Experience</h4>
          <p>Our games come with clear instructions and minimal setup, so you can spend more time enjoying the moment and less time figuring out the rules.
          </p>

          <h4>Community and Connection</h4>
          <p>At the heart of Kozyclan is our commitment to building connections. We design our games to break down social barriers, spark conversations, and create lasting memories. With Kozyclan, you’re not just playing a game; you’re sharing an experience.
          </p>
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
