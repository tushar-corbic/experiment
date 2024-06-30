import Link from "next/link";
import Image from "next/image"
import "../../styles/css/templatemo-chain-app-dev.css"
import "../../styles/css/animated.css"
import "../../styles/css/owl.css"
import Container from "@/components/container";
import HomeContainer from "@/components/homeContainer";
import PostList from "@/components/postlist";

export default function Post({ posts }) {
  return (
    <>
      {posts && (
        <HomeContainer>

          
          {/* <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div> */}
          <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="row">
                    <div class="col-lg-6 align-self-center">
                      <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                        <div class="row">
                          <div class="col-lg-12" style={{float:"left", width:"50%"}}>
                            <h2>Coming soon: A platform that lights up social gatherings !</h2>
                            <p>A collection of games and prompts for ice breaking and fun sessions among couples, a group of friends, office colleagues, strangers or acquaintances, or any party.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6" style={{float:"right"}}>
                      <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                          <Image
                            src="/img/slider-dec.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div> */}
        </HomeContainer>
      )}
    </>
  );
}
