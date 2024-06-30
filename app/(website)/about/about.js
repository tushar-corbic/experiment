import Container from "@/components/container";
import HomeContainer from "@/components/homeContainer";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import "../../../styles/css/image.css"

export default function About({ authors, settings }) {
  return (
    <HomeContainer>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Team
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>
      <div class="row">
        <div class="column">
          <div class="card">
            <Image
              src="/img/client-image.jpg"
              alt="Jane"
              sizes="(max-width: 320px) 100vw, 320px"

              // style="width:100%"
              width={400}
              height={400}
            />
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <Image
              src="/img/client-image.jpg"
              alt="Jane"
              sizes="(max-width: 320px) 100vw, 320px"

              // style="width:100%"
              width={400}
              height={400}
            />
            <div class="container">
              <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <Image
              src="/img/client-image.jpg"
              alt="Jane"
              sizes="(max-width: 320px) 100vw, 320px"

              // style="width:100%"
              width={400}
              height={400}
            />
            <div class="container">
              <h2>John Doe</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        <div className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
          <Image
            src="/img/client-image.jpg"
            alt="Jane"
            sizes="(max-width: 320px) 100vw, 320px"

            style={{width:"100%"}}
            width={100}
            height={100}
          />
        </div>
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
    </HomeContainer>
  );
}
